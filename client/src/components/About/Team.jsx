import React from "react";
import Irfan from "../../assets/About/coo.jpg";
import Kami from "../../assets/About/ceo.jpg";
import Sami from "../../assets/About/sami.jpg";
import Ahmad from "../../assets/About/ahmad.jpg";
import Talal from "../../assets/About/talal.jpg";

const teamMembersTop = [
  {
    name: "Irfan Shah", 
    title: "CEO / Founder",
    image: Irfan,
  },
  {
    name: "Kami Shah",
    title: "COO / Founder",
    image: Kami,
  },
];

const teamMembersBottom = [
  {
    name: "Sami",
    title: "CTO / Co-Founder",
    image: Sami,
  },
  {
    name: "Ahmad",
    title: "CFO / Co-Founder",
    image: Ahmad,
  },
  {
    name: "Talal",
    title: "Frontend Developer",
    image: Talal,
  },
];

export default function Team() {
  return (
    <section className="bg-black/90 text-white py-16 px-6 mb-[1px] md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Meet Our Team
        </h2>

        {/* Top members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamMembersTop.map((member, index) => (
            <div
              key={index}
              className="bg-black/20 rounded-2xl shadow-md  p-6 flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover border-4  shadow-md"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-purple-400 text-sm">{member.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lower members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembersBottom.map((member, index) => (
            <div
              key={index}
              className="bg-black/20 rounded-2xl shadow-md transition-all duration-300 p-6 flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover border-4 shadow-md"
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-purple-400 text-sm">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
