import { useState } from "react";
import {
  FaSwift,
  FaAndroid,
  FaReact,
  FaDatabase,
  FaCloud,
  FaGamepad,
} from "react-icons/fa";
import { SiKotlin, SiFlutter, SiMongodb, SiDocker } from "react-icons/si";

const techData = {
  "Mobile Apps": {
    IOS: [
      { icon: FaSwift, label: "Swift" },
      { icon: FaSwift, label: "Combine" },
    ],
    Android: [
      { icon: SiKotlin, label: "Kotlin" },
      { icon: FaAndroid, label: "Java" },
    ],
  },
  "Web Platforms": {
    Frontend: [
      { icon: FaReact, label: "React" },
      { icon: FaReact, label: "Next.js" },
    ],
    Backend: [
      { icon: FaReact, label: "Node.js" },
      { icon: FaReact, label: "Express" },
    ],
  },
  "Cross Platforms": {
    React: [{ icon: FaReact, label: "React Native" }],
    Flutter: [{ icon: SiFlutter, label: "Flutter" }],
  },
  Games: {
    Engines: [{ icon: FaGamepad, label: "Unity" }],
    Servers: [{ icon: FaReact, label: "Photon" }],
  },
  Database: {
    Database: [
      { icon: FaDatabase, label: "MySQL" },
      { icon: SiMongodb, label: "MongoDB" },
    ],
  },
  "Cloud DevOps": {
    DevOps: [{ icon: SiDocker, label: "Docker" }],
    Cloud: [{ icon: FaCloud, label: "AWS" }],
  },
};

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState("Mobile Apps");

  return (
    <div className="md:px-10 px-5 py-10  rounded-2xl">
      <h1 className="text-4xl font-extrabold py-5">Technologies We Use</h1>
      <p className="py-3 text-lg max-w-3xl text-gray-600">
        Hire from our pool of 350+ experts in mobile, web, and software
        engineering. We specialize in the latest technologies and frameworks.
      </p>

      <div className="flex flex-col md:flex-row border-t mt-6">
        {/* Tabs */}
        <div className="flex scroll-hide flex-row md:flex-col gap-2 overflow-x-auto md:w-1/4 py-5">
          {Object.keys(techData).map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-5 rounded-lg cursor-pointer font-semibold whitespace-nowrap transition 
              ${
                activeTab === tab
                  ? "bg-purple-100 text-purple-700 border-l-4 border-purple-500"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="px-5 md:px-10 py-5 w-full border-t md:border-t-0 md:border-l">
          {Object.entries(techData[activeTab]).map(([category, items]) => (
            <div key={category} className="mb-6">
              <h2 className="text-2xl font-bold mb-4">{category}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    className="flex cursor-pointer items-center justify-between gap-2 px-4 py-5 rounded-xl bg-white shadow 
                    hover:shadow-md transition transform hover:-translate-y-1 hover:bg-purple-50"
                  >
                    <span className="font-medium text-gray-800">{label}</span>
                    <Icon className="text-2xl text-purple-600" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


