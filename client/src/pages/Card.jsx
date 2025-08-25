import { useRef } from 'react';
import html2pdf from 'html2pdf.js/dist/html2pdf.min';
import Back from '../components/Card/back'
import Front from '../components/Card/front'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function EmployeeCard() {
    
    const [userData, setUserData] = useState({
        name: "",
        designation: "",
        email: "",
        contact: "",
        location: "",
    });

    const { id } = useParams();
console.log(id)
    useEffect(() => {
  if (!id) return;
      axios.get(`http://localhost:5000/api/records/cardEmp/${id}`)
    .then((res) => {
      setUserData(res.data);
      console.log('Fetched userData:', res.data);
    })
    .catch((err) => {
      console.error("Error fetching user:", err);
    });
}, [id]);

    const cardRef = useRef();
    const handleDownload = () => {
        if (!cardRef.current) return;

        const opt = {
            margin: 0,
            filename: 'employee-card.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: {
                unit: 'mm',
                format: [85.6, 54],
                orientation: 'landscape',
            },
            pagebreak: { mode: ['avoid-all'] }
        };

        html2pdf().set(opt).from(cardRef.current).save();
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-4 p-10">
            <div ref={cardRef}>
                <div style={{ pageBreakAfter: 'always' }}>
                    <Back />
                </div>
                <div>
                    <Front userData={userData} />
                </div>
            </div>

            <button
                onClick={handleDownload}
                className="mt-5 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Download Real-Size Card (2 Pages)
            </button>
        </div>
    );
}
