import logoImg from "../../assets/AvanicLogo.png";
export default function Logo() {
  return (
    <div className="flex items-center pl-8 gap-4">
      <div>
        <img className="w-[80px] h-[80px]" src={logoImg} alt="Logo" />
      </div>
      <div className="w-[2px] h-17 bg-gray-400"
      >
      </div>
      <div className="Poppins"> 
        <div className="  font-bold text-4xl  " >
            Avanic
        </div>
        <div className="font-median text-2xl  ">
            soft
        </div>
      </div>
    </div>
  );
}
