export default function TeamCTA(){
    return(
        <div className="px-6 lg:px-8 max-w-7xl mx-auto mt-14 md:mt-24 lg:mt-[8rem] lg:mb-[8rem]">
            <div className="flex flex-col justify-between gap-x-8 gap-y-4 bg-[#f6f6f6b3] p-4 md:p-6  md:flex-row md:items-center lg:pl-11 lg:pr-8 rounded-2xl md:rounded-full border">
                <h4 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] md:w-[70%] lg:w-[75%] xl:w-[80%]">
                    Create a software development <span className="text-green-500">Team</span> with us
                </h4>
                <div className="mt-1 flex items-center justify-center gap-x-4">
                    <button className="group relative overflow-hidden bg-black text-white min-w-[150px] md:min-w-[180px] 2xl:max-w-[195px] items-center px-6 md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm cursor-pointer ">
                        <span className="absolute inset-0 flex justify-center items-center transition-all duration-300 group-hover:-translate-y-full">
                            Get a Quote
                        </span>
                        <span className="absolute inset-0 flex justify-center items-center translate-y-full transition-all duration-300 group-hover:translate-y-0">
                            Get a Quote
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}