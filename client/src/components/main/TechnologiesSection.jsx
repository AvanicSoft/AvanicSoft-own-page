import { useState } from "react";
import { FaMobile, FaSwift } from "react-icons/fa6";
import { FaUikit } from "react-icons/fa";

export default function TechnologiesSection() {
  const [isActive, setIsActive] = useState("Mobile");
  const [swap, setSwap] = useState("");


  return (
    <div className="md:px-20 px-5 py-2">
      <h1 className="text-4xl text-black font-bold py-5" >Technologies we use</h1>
      <p className="py-5 text-xl leading-tigh Roboto ">
        Hire from our pool of 350+ specialized experts in web, mobile, and
        software engineering, specializing in the latest technologies and
        frameworks, ready to scale your development teams effortlessly.
      </p>
      <div className="border-t flex flex-col md:flex-row">
        <div className="flex flex-row md:flex-col gap-1 md:mr-4 pt-5 overflow-x-auto whitespace-nowrap scroll-hide md:w-1/3">
          <div onClick={()=>{setIsActive("Mobile")}} className={`px-4 py-4 rounded-l-full  cursor-pointer  font-bold  inline-block ${isActive=="Mobile" ? "bg-gradient-to-r  from-green-100 to-white":""}`}>
            Mobile Apps
          </div>
          <div onClick={()=>{setIsActive("Web Platforms")}} className={`px-4 py-4 rounded-l-full  cursor-pointer  font-bold  inline-block ${isActive=="Web Platforms" ? "bg-gradient-to-r  from-green-100 to-white":""}`}>
            Web Platforms
          </div>
          <div onClick={()=>{setIsActive("Cross Platforms")}} className={`px-4 py-4 rounded-l-full  cursor-pointer  font-bold  inline-block ${isActive=="Cross Platforms" ? "bg-gradient-to-r  from-green-100 to-white":""}`}>
            Cross Platforms
          </div>
          <div onClick={()=>{setIsActive("Games")}} className={`px-4 py-4 rounded-l-full  cursor-pointer  font-bold  inline-block ${isActive=="Games" ? "bg-gradient-to-r  from-green-100 to-white":""}`}>
            Games
          </div>
          <div onClick={()=>{setIsActive("Database")}} className={`px-4 py-4 rounded-l-full  cursor-pointer  font-bold  inline-block ${isActive=="Database" ? "bg-gradient-to-r  from-green-100 to-white":""}`}>
            Database
          </div>
          <div onClick={()=>{setIsActive("Cloud DevOps")}} className={`px-4 py-4 rounded-l-full  cursor-pointer  font-bold  inline-block ${isActive=="Cloud DevOps" ? "bg-gradient-to-r  from-green-100 to-white":""}`}>
            Cloud & DevOps
          </div>
        </div>
        <div
          className={`px-4 md:px-10 md:pt-2 mt-4 md:mt-0 w-full md:border-l-1 border-t  md:border-t-0 ${
            isActive == "Mobile" ? "block" : "hidden"
          }`}
        >
          <div>
            <h1 className="text-2xl font-bold py-4 ">IOS</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Btn icon={FaSwift} label="Swift" swapname="top Swift" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="UI Kit" swapname="top UI Kit" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="RxSwitf" swapname="top RxSwitf " swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Combine" swapname="top Combine" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="MVVM" swapname="top MVVM" swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Alomofire" swapname="top Alomofire" swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Core" swapname="top Core" swap={swap} setSwap={setSwap} />
              </div>
            <h1 className="text-2xl font-bold py-4">Android</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Btn icon={FaSwift} label="Kotlin" swapname="bottom Kotlin " swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit}  label="MVVM" swapname="bottom MVVM"  swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit}  label="Rxjava" swapname="bottom Rxjava " swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift}  label="Java" swapname="bottom Java" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit}  label="Retrofit" swapname="bottom Retrofit" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit}  label="JetPack" swapname="bottom JetPack" swap={swap} setSwap={setSwap} />
            </div>
          </div>
        </div>
        <div
          className={`px-4 md:px-10 md:pt-2 mt-4 md:mt-0 w-full md:border-l-1 border-t  md:border-t-0 ${
            isActive == "Web Platforms" ? "block" : "hidden"
          }`}
        >
          <div>
            <h1 className="text-2xl font-bold py-4">Frontend</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Btn icon={FaSwift} label="Swift" swapname="top Swift" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="UI Kit" swapname="top UI Kit" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="RxSwitf" swapname="top RxSwitf " swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Combine" swapname="top Combine" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="MVVM" swapname="top MVVM" swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Alomofire" swapname="top Alomofire" swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Core" swapname="top Core" swap={swap} setSwap={setSwap} />
              </div>
            <h1 className="text-2xl font-bold py-4">Backend</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Btn icon={FaSwift} label="Kotlin" swapname="bottom Kotlin " swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit}  label="MVVM" swapname="bottom MVVM"  swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit}  label="Rxjava" swapname="bottom Rxjava " swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift}  label="Java" swapname="bottom Java" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit}  label="Retrofit" swapname="bottom Retrofit" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit}  label="JetPack" swapname="bottom JetPack" swap={swap} setSwap={setSwap} />
            </div>
          </div>
        </div>
        <div
          className={`px-4 md:px-10 md:pt-2 mt-4 md:mt-0 w-full md:border-l-1 border-t  md:border-t-0 ${
            isActive == "Cross Platforms" ? "block" : "hidden"
          }`}
        >
          <div>
            <h1 className="text-2xl font-bold py-4">React</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Btn icon={FaSwift} label="Swift" swapname="top Swift" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="UI Kit" swapname="top UI Kit" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="RxSwitf" swapname="top RxSwitf " swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Combine" swapname="top Combine" swap={swap} setSwap={setSwap} />
              </div>
            <h1 className="text-2xl font-bold py-4">Flutter</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Btn icon={FaSwift} label="Kotlin" swapname="bottom Kotlin " swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit}  label="MVVM" swapname="bottom MVVM"  swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit}  label="Rxjava" swapname="bottom Rxjava " swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift}  label="Java" swapname="bottom Java" swap={swap} setSwap={setSwap} />
            </div>
          </div>
        </div>
        <div
          className={`px-4 md:px-10 md:pt-2 mt-4 md:mt-0 w-full md:border-l-1 border-t  md:border-t-0 ${
            isActive == "Games" ? "block" : "hidden"
          }`}
        >
          <div>
            <h1 className="text-2xl font-bold py-4">Engines</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Btn icon={FaSwift} label="Swift" swapname="top Swift" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="UI Kit" swapname="top UI Kit" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="RxSwitf" swapname="top RxSwitf " swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Combine" swapname="top Combine" swap={swap} setSwap={setSwap} />
              </div>
            <h1 className="text-2xl font-bold py-4">Servers</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Btn icon={FaSwift} label="Kotlin" swapname="bottom Kotlin " swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit}  label="MVVM" swapname="bottom MVVM"  swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit}  label="Rxjava" swapname="bottom Rxjava " swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift}  label="Java" swapname="bottom Java" swap={swap} setSwap={setSwap} />
            </div>
          </div>
        </div>
        <div
          className={`px-4 md:px-10 md:pt-2 mt-4 md:mt-0 w-full md:border-l-1 border-t  md:border-t-0 ${
            isActive == "Database" ? "block" : "hidden"
          }`}
        >
          <div>
            <h1 className="text-2xl font-bold py-4">Database</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Btn icon={FaSwift} label="Swift" swapname="top Swift" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="UI Kit" swapname="top UI Kit" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="RxSwitf" swapname="top RxSwitf " swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Combine" swapname="top Combine" swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Swift" swapname="top Swift" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="UI Kit" swapname="top UI Kit" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="RxSwitf" swapname="top RxSwitf " swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Combine" swapname="top Combine" swap={swap} setSwap={setSwap} />
              </div>
          </div>
        </div>
        <div
          className={`px-4 md:px-10 md:pt-2 mt-4 md:mt-0 w-full md:border-l-1 border-t  md:border-t-0 ${
            isActive == "Cloud DevOps" ? "block" : "hidden"
          }`}
        >
          <div>
            <h1 className="text-2xl font-bold py-4">DevOps</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Btn icon={FaSwift} label="Swift" swapname="top Swift" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="UI Kit" swapname="top UI Kit" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="RxSwitf" swapname="top RxSwitf " swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Combine" swapname="top Combine" swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Combine" swapname="top Combine" swap={swap} setSwap={setSwap} />
              </div>
            <h1 className="text-2xl font-bold py-4">Cloud</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Btn icon={FaSwift} label="Swift" swapname="bottom Swift" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="UI Kit" swapname="bottom UI Kit" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="RxSwitf" swapname="bottom RxSwitf " swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Combine" swapname="bottom Combine" swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Swift" swapname="bottom Swift" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="UI Kit" swapname="bottom UI Kit" swap={swap} setSwap={setSwap} />
                <Btn icon={FaUikit} label="RxSwitf" swapname="bottom RxSwitf " swap={swap} setSwap={setSwap} />
                <Btn icon={FaSwift} label="Combine" swapname="bottom Combine" swap={swap} setSwap={setSwap} />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Btn({ icon: Icon, label,swapname, swap, setSwap }) {
  return (
    <button
      onMouseEnter={() => setSwap(swapname)}
      onMouseLeave={() => setSwap("")}
      className={`flex flex-row group cursor-pointer relative overflow-hidden items-center justify-center md:px-8 h-[70px] md:h-14 rounded-full font-bold text-sm 
      w-full sm:w-auto max-w-[200px]  
      ${swap === swapname ? "bg-black text-white" : "bg-gray-100 text-black"}`}
    >
      <Icon className="text-3xl mr-10" />
      <div className="relative h-full flex justify-center items-center">
        <span className="absolute inset-0 flex justify-center items-center transition-all duration-300 group-hover:-translate-y-full">
          {label}
        </span>
        <span className="absolute inset-0 flex justify-center items-center translate-y-full transition-all duration-300 group-hover:translate-y-0">
          {label}
        </span>
      </div>
    </button>
  );
}