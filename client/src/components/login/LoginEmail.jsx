import { Mail , LockKeyhole } from 'lucide-react'

export default function LoginEmail(){
    return(
        <div className="Roboto w-[320px] flex justify-center flex-col">
              <div className=' flex gap-5 flex-col'>
                   <div className="relative w-full shadow-sm">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <Mail className="w-5 h-5" />
                        </span>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                <div className="relative w-full shadow-sm">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <LockKeyhole  className="w-5 h-5" />
                        </span>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
            </div>
            <div className="relative flex py-4 justify-end text-blue-600 text-sm cursor-pointer hover:underline">
                 Forget password?
            </div>
            <div className='flex justify-center pt-2'>
                <button
                className='bg-blue-300 px-10 py-1 text-white font-bold rounded text-lg hover:translate-y-[2px] transition-transform'
                >Sign In</button>
            </div>
        </div>
    )
}