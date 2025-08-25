import Logo from '../components/login-Signup/logo'
import LoginEmail from '../components/login-Signup/LoginEmail'
import LoginSocial from '../components/login-Signup/LoginSocial'

export default function Login(){
    return (
        <div>
            <div className='flex justify-center Roboto py-2'>
                <Logo/>
            </div>
            <div className='w-screen h-auto flex justify-center '> 
                <div className='bg-gray-100 w-250 h-auto rounded py-10'>
                    <div className="absolute top-[200px] left-1/2  w-[2px] h-60 bg-gray-300"></div>
                    <div className='flex justify-center text-gray-500 text-sm'>New user?<span className='text-blue-500'>Create an account</span></div>
                   <div className='flex justify-around text-sm pt-5 font-bold'>
                        <div className=''>
                            CONTINUE WITH   
                        </div>
                        <div>
                            OR CONTINUE WITH
                        </div>
                    </div>    
                    <div className='flex justify-around py-10'>
                        <div>
                            <LoginEmail/>
                        </div>
                        <div>
                            <LoginSocial/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}