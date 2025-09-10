import React from "react";
import Theme from "../../assets/CardFront.jpeg";
import logoImg from "../../assets/AvanicLogo.png";
import { Mail, Phone, MapPin, PanelsTopLeft } from "lucide-react";

const Front = ({userData}) => {
  return (
    <div
      style={{
        width: "85.6mm",
        height: "54mm",
        background: "#f0f0f0",
        border: "1px solid #ccc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <img
        src={Theme}
        alt="Card Theme"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      <div className="absolute top-5 left-3  flex items-center text-white">
        <img src={logoImg} alt="Logo" style={{ width: 40, height: 40 }} />
        <div
          style={{
            width: 3,
            height: 40,
            background: "#9ca3af",
            margin: "0 10px",
          }}
        ></div>
        <div style={{ fontFamily: "sans-serif" }}>
          <div style={{ fontWeight: "bold", fontSize: 20 }}>Avanic</div>
          <div style={{ fontWeight: 500, fontSize: 15 }}>soft</div>
        </div>
      </div>

      <div className="absolute flex flex-col top-12 right-6 text-black text-right">
        <div className="text-sm font-bold">{userData.name}</div>
        <div className="text-sm font-medium">{userData.designation}</div>
      </div>

      <div className="absolute right-6 top-25 w-10 border-t-3 border-black"></div>

      <div className="absolute bottom-3 right-4 text-black text-xs space-y-1 text-right">
        <div className="flex flex-row gap-2 ">
          <span>{userData.email}</span>
          <span className="relative top-2"><Mail className="w-3 h-3" /></span>
        </div>
        <div className="flex items-center justify-end gap-1">
          <span>{userData.contact}</span>
          <span className="relative top-2"><Phone className="w-3 h-3" /></span>
        </div>
        <div className="flex items-center justify-end gap-1">
          <span>{userData.location}</span>
          <span className="relative top-2"><MapPin className="w-3 h-3" /></span>
        </div>
        <div className="flex items-center justify-end gap-1">
          <span>www.Avanicsoft.com</span>
          <span className="relative top-2"><PanelsTopLeft className="w-3 h-3" /></span>
        </div>
      </div>
    </div>
  );
};

export default Front;
