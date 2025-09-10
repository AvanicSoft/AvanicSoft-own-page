import React from "react";

const teamMembersTop = [
  {
    name: "Kami Shah",
    title: "COO / Founder",
    image: "ceo.jpg",
  },
  {
    name: "Irfan Shah",
    title: "CEO / Co-founder",
    image: "coo.jpg",
  },
];

const teamMembersBottom = [
  {
    name: "Sami",
    title: "CTO",
    image: "sami1.jpg",
  },
  {
    name: "Ahmad",
    title: "CFO",
    image: "ahmad.jpg",
  },

  {
    name: "Talal",
    title: "Front end dev",
    image: "talal.jpg",
  },


 
  
];

export default function Team() {
  return (
    <section className="bg-[#0a0f1c] text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet some of the team</h2>

        {/* upper object */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {teamMembersTop.map((member, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-lg overflow-hidden shadow-lg hover:shadow-purple-700 transition-shadow duration-300"
            >
            <img
  src={member.image}
  alt={member.name}
  className="w-full h-110 object-cover object-center rounded-t-md"
/>

              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-purple-400 mt-1">{member.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/*lower object*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembersBottom.map((member, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-lg overflow-hidden shadow-lg hover:shadow-purple-700 transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-purple-400 mt-1">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
