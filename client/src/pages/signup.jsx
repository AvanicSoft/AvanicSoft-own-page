import Logo from "../components/login-Signup/logo";
import SignupName from "../components/login-Signup/SiginupName";

export default function Signup() {
  return (
    <div className="roboto">
        <div className="flex flex-col items-center">
            <Logo />
        </div>
        <div className="w-screen h-auto flex justify-center py-5">
            <div className="flex flex-col bg-gray-100 w-200 h-auto rounded py-5 px-40">
                <div className="flex justify-right text-gray-500 text-2xl font-bold py-2">
                    Create new account
                </div>
                <SignupName />
            </div>
        </div>
    </div>
  );
}
