export default function TeamCTA(){
    return(
        <div className="md:px-10 px-5 max-w-full mx-auto mb-20 ">
            <div className="flex justify-between p-4 flex-col bg-gray-100 md:flex-row items-center lg:pl-11 lg:pr-8 rounded-xl md:rounded-4xl ">
                <h4 className="text-black font-bold md:text-2xl text-md">
                    Create a software development <span className="text-purple-500">Team</span> with us
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