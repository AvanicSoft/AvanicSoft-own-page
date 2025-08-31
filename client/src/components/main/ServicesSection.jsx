import {
  FaMobileAlt,
  FaCode,
  FaRobot,
  FaLaptopCode,
  FaBullhorn,
  FaVideo,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-purple-600 text-3xl" />,
    description:
      "Build responsive, high-performing websites and web applications. Focus on modern frameworks, clean design, and seamless user experience.",
  },
  {
    title: "Application Development Services",
    icon: <FaMobileAlt className="text-purple-600 text-3xl" />,
    description:
      "Cross-platform solutions for web, desktop, and mobile. Agile workflows, cloud tech, and cutting-edge UI/UX.",
  },
  {
    title: "Custom Software Development",
    icon: <FaCode className="text-purple-600 text-3xl" />,
    description:
      "Tailored B2B, B2C, or SaaS solutions. Scalable, secure, and seamlessly integrated with existing systems.",
  },
  {
    title: "Video Editing/Graphic designing",
    icon: <FaVideo className="text-purple-600 text-3xl" />,
    description:
      "Create engaging videos with professional editing, smooth transitions, and high-quality visuals that capture attention and tell your story.",
  },
  {
    title: "Social Media Marketing",
    icon: <FaBullhorn className="text-purple-600 text-3xl" />,
    description:
      "Boost your brand presence across platforms with targeted campaigns, engaging content, and data-driven strategies to reach the right audience.",
  },
  {
    title: "AI / ML Services",
    icon: <FaRobot className="text-purple-600 text-3xl" />,
    description:
      "AI solutions using ChatGPT, Bard, and OpenAI. Automate processes, gain insights, and enhance decision-making.",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-16 bg-gray-50 md:px-10 px-5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Delivering The Right Solutions
        </h2>
        <p className="text-lg text-gray-600 Roboto mb-12">
          At AvanicSoft Solutions Inc. we specialize in delivering precisely
          tailored solutions, ensuring optimal outcomes for your unique needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className=" bg-white cursor-pointer shadow-md rounded-lg p-4 hover:shadow-xl transition transform hover:-translate-y-2 hover:bg-purple-50"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm Roboto">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <button className="inline-flex cursor-pointer items-center px-8 py-4  shadow-md rounded-lg bg-white text-black font-semibold   hover:shadow-xl transition transform hover:bg-purple-50 hover:scale-105">
            Click for More
            <FaArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
