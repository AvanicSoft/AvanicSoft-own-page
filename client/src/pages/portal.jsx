import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import logoimg from '../assets/AvanicLogo.png'
import newlogo from '../assets/tg.png'
import { useNavigate } from 'react-router-dom';

const Portal = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    designation: "",
    email: "",
    contact: "",
    location: "",
  });

  const [records, setRecords] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 
  const [editId, setEditId] = useState(null);      
  useEffect(() => {
    axios.get("http://localhost:5000/api/records/allEmp")
      .then((res) => setRecords(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        // PUT (Update)
        const res = await axios.put(`http://localhost:5000/api/records/${editId}`, form);
        const updated = [...records];
        updated[editIndex] = res.data;
        setRecords(updated);
      } else {
        // POST (Create)
        const res = await axios.post("http://localhost:5000/api/records/newEmp", form);
        setRecords([...records, res.data]);
      }
    } catch (error) {
      console.error("Submit error:", error);
    }

    // Reset form and edit state
    setForm({
      name: "",
      designation: "",
      email: "",
      contact: "",
      location: "",
    });
    setEditIndex(null);
    setEditId(null);
    setShowForm(false);
  };


  const handleDelete = async (index, id) => {
    try {
      await axios.delete(`http://localhost:5000/api/records/${id}`);
      const updated = records.filter((_, i) => i !== index);
      setRecords(updated);
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleEdit = (index) => {
    const selected = records[index];
    setForm(selected);
    setEditIndex(index);
    setEditId(selected._id);
    setShowForm(true);
  };
  const handleDownload = (index, id) => {
      navigate(`/card/${id}`);
    };

  return (
    <div className="flex flex-row">
      {isSidebarOpen && (
        <div className="...">
          <div className="shadow-md shadow-black border-black w-85 h-[100vh] flex flex-col justify-between bg-[#F7F7F7] font-serif z-20 pt-3 pl-1.5 pr-1">
            <div className=" flex flex-col">
              <div className="flex flex-row justify-between m-1 mt-2">
                <img src={newlogo} alt="img" className="w-20 mr-1" />
                <div className="border-r-2 border-blue mt-1"> </div>
                <div className="text-cyan-900 font-serif ml-1">
                  <p className="text-3xl font-bold">Avanic soft </p>
                  <p className="font-bold">techonologies</p>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="rounded-[50%] bg-white w-8 h-8  pt-1 shadow-md  "
                >
                  <i class="fa-solid fa-angles-left hover:text-blue-600 transition-colors duration-300 cursor-pointer"></i>
                </button>
              </div>

              <div>
                <h1 className="font-bold text-2xl text-gray-700 mt-10 flex       hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                  Navigations
                </h1>
                <div className="w-full max-w-xs p-4 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-md cursor-pointer">
                  <p className="text-gray-600 text-sm">Front end team</p>
                </div>
                <div className="w-full max-w-xs p-4 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-md cursor-pointer">
                  <p className="text-gray-600 text-sm">Back end team</p>
                </div>
                <div className="w-full max-w-xs p-4 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-md cursor-pointer">
                  <p className="text-gray-600 text-sm">front desk</p>
                </div>
                <div className="w-full max-w-xs p-4 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-md cursor-pointer">
                  <p className="text-gray-600 text-sm">Media team</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col  ">
              <h1 className="font-bold text-2xl text-gray-700 mt-10 fle  hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                Administrator
              </h1>
              <button className="flex flex-row gap-1.5 items-center pl-1 hover:text-blue-500">
                <i class="fa-solid fa-key"></i>
                Manage Access
              </button>
              <button className="flex flex-row gap-1.5 items-center pl-1 hover:text-red-500">
                <i class="fa-solid fa-right-from-bracket"></i>
                Log out
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex flex-col gap-0.5 ">
        <nav className="w-full  bg-white shadow-md px-4 py-3 h-15  justify-center flex flex-row z-0">
          {!isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="w-10 h-10 border rounded-[50%]  pt-1 shadow-2xl"
            >
              <i class="fa-solid fa-bars text-2xl hover:text-blue-600 transition-colors duration-300 cursor-pointer"></i>
            </button>
          )}
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center ">
              <img src={logoimg} alt="logo" className="w-10 h-10" />

              <h1 className="text-xl font-bold text-gray-800">
                vanic soft admin portal
              </h1>
            </div>
          </div>
          <div className="w-17 relative bottom-1.5 ">
            <img src="tg.png" alt="" />
          </div>
        </nav>

        <div className="pl-3  h-[100vh]">
          <div className="max-w-6xl relative  mx-auto  p-4 font-sans">
            <h2 className="text-2xl font-bold mb-4 text-center  bg-gradient-to-r to-[#00D9E6] from-[#01667D] bg-clip-text  border text-transparent  ">
              Records Table
            </h2>
            <div onClick={() => setShowForm(true)} className="overflow-x-auto">
              <table className="w-full table-auto border border-gray-200 shadow-sm rounded">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 border">#</th>
                    <th className="p-3 border">Name</th>
                    <th className="p-3 border">Designation</th>
                    <th className="p-3 border">Email</th>
                    <th className="p-3 border">Contact</th>
                    <th className="p-3 border">Location</th>
                    <th className="p-3 border text-center">Actions</th>
                    <th className="p-3 border">Download Card</th>
                  </tr>
                </thead>
                <tbody>
                  {records.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center p-4 text-gray-500">
                        No records yet.
                      </td>
                    </tr>
                  ) : (
                    records.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="p-3 border">{index + 1}</td>
                        <td className="p-3 border">{item.name}</td>
                        <td className="p-3 border">{item.designation}</td>
                        <td className="p-3 border">{item.email}</td>
                        <td className="p-3 border">{item.contact}</td>
                        <td className="p-3 border">{item.location}</td>
                        <td className="p-3 border text-center space-x-2">
                          <button
                            onClick={() => handleEdit(index)}
                            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(index, item._id)}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                          >
                            Delete
                          </button>
                        </td>
                        <td className="p-3 border text-center space-x-2">
                          <button
                            onClick={() => handleDownload(index, item._id)}
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {showForm && (
            <div
              ref={formRef}
              className="max-w-md mx-auto relative bottom-40  m-auto p-6 bg-white shadow-md rounded-md font-sans"
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Add New Record
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Designation"
                  name="designation"
                  value={form.designation}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Contact"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                  //   onClick={() => setShowForm(false)}
                >
                  {editIndex !== null ? "Update" : "Add"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portal;
