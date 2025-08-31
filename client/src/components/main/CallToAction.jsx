export default function CallToAction(){
    return(
        <div>
            <div>
            <div className="bg-white relative w-full lg:min-h-[80vh] z-50 flex items-center justify-center border-t border-gray-300">
                <div className="pt-14 mx-auto text-center max-w-7xl px-6 md:py-24 pb-14 lg:px-8">
                    <p className="text-black mb-2 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Pull the Trigger!</p>
                    <div className="overflow-hidden">
                        <h2 className="text-black font-extrabold text-[43px] leading-none lg:text-6xl xl:text-7xl 2xl:text-8xl lg:tracking-[-4px] tracking-[-2px] pb-2 2xl:pb-[11px]"
                        style = {{transform: "translate(0px, 0px)"}}>
                            Let's bring your <br className="min-[580px]:block hidden"/> vision to life
                        </h2>
                    </div>
                    <div className="mt-1 flex items-center justify-center gap-x-4">
                        <button className="group cursor-pointer relative overflow-hidden bg-black text-white mt-2 flex items-center justify-center px-16 md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm w-44">
                            <span className="absolute inset-0 flex justify-center items-center transition-all duration-300 group-hover:-translate-y-full px-4 py-4">Get Started</span>
                            <span className="absolute inset-0 flex justify-center items-center translate-y-full transition-all duration-300 group-hover:translate-y-0 px-4 py-4">Get Started</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}