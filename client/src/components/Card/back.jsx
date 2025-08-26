import Theme from '../../assets/Cardback.png';
import logoImg from '../../assets/AvanicLogo.png';

export default function Back() {
  return (
      <div
        style={{
          width: "85.6mm",
          height: "54mm",
          position: "relative",
          top: 0,
          left: 0,
        }}
      >
        <img
          src={Theme}
          alt="Card Theme"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "0px",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img style={{ width: 50, height: 50 }} src={logoImg} alt="Logo" />
            <div
              style={{
                width: 3,
                height: 50,
                background: "#9ca3af",
                margin: "0 16px",
              }}
            ></div>
            <div style={{ fontFamily: "sans-serif" }}>
              <div style={{ fontWeight: "bold", fontSize: 25 }}>Avanic</div>
              <div style={{ fontWeight: 500, fontSize: 20 }}>soft</div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 50,
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 10,
            fontWeight: "bold",
            fontSize: 10,
          }}
        >
          WWW.Avanicsoft.com
        </div>
      </div>
  );
}



