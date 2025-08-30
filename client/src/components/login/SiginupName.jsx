import { User, Mail,Lock } from 'lucide-react';

export default function SignupName() {
    return (
        <div className="">
            <div className="flex flex-row gap-5">
                <div className="relative w-full shadow-sm">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <User />
                    </span>
                    <input 
                        placeholder="Enter your first name"
                        type='text'
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></input>
                </div>
                <div className="relative w-full shadow-sm">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <User/>
                    </span>
                    <input 
                        placeholder="Enter your last name"
                        type='text'
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></input>
                </div>
            </div>
            <div className="flex relative w-full mt-4">
                <div className='flex relative w-full shadow-sm'>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <Mail />
                </span>
                <input 
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></input>
                </div>
            </div>
                <div className="flex flex-rows gap-5 ">
                    <div className="relative w-full mt-4 shadow-sm">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <Lock />
                        </span>
                        <input 
                            type="password"
                            placeholder="Create a password"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></input>
                    </div>
                    <div className="relative w-full mt-4 shadow-sm">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <Lock />
                        </span>
                        <input 
                            type="password"
                            placeholder="Confirm password"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></input>
                    </div>
            </div>
            <div className="flex justify-center pt-5">
                 <div className='Roboto text-sm text-gray-500'>
                    By continuing, you agree to the creation
                    in accordance with our <span className='text-blue-500'>
                    Privacy Policy</span> and <span className='text-blue-500'>
                    Terms of Use</span>
                </div>
            </div>
            <div className="flex justify-center ">
                <div className='flex justify-center flex-col mt-4'>
                    <button
                className='bg-blue-300 px-10 py-1 text-white font-bold rounded text-lg hover:translate-y-[2px] transition-transform'
                >Sign In</button>
                <div className='flex justify-around flex-rows pt-4'>
                    <button
                        className='text-sm text-gray-500 hover:text-black'
                    >Cancel</button>
                    <button
                        className='text-blue-300 text-sm hover:text-blue-500'
                    >Login</button>

                </div>

                </div>
            </div>
        </div>
    )
}