import Google from '../../assets/icons8-google.svg';
import Linkedin from '../../assets/icons8-linkedin.svg';
import Github from '../../assets/icons8-github.svg';

export default function LoginSocial() {
  return (
    <div className='w-[350px] flex flex-col gap-8'>
        <div className="flex justify-around">
            <img src={Google} alt="Google" className="w-8 h-8 cursor-pointer" />
            <img src={Linkedin} alt="Linkedin" className="w-8 h-8 cursor-pointer" />
            <img src={Github} alt="Github" className="w-8 h-8 cursor-pointer" />
        </div>
        <div className='Roboto text-sm text-gray-500'>
            By continuing, you agree to the creation
            in accordance with our <span className='text-blue-500'>
            Privacy Policy</span> and <span className='text-blue-500'>
            Terms of Use</span>
        </div>

    </div>
    
  );
}