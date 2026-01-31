import logo from "../assets/vantix_logo.png";
import "../App.css";

function Landing() {
  return (
    <div className="container" style={{ textAlign: "center", marginTop: "100px" }}>
      <img
        src={logo}
        alt="Logo Vantix"
        style={{ width: "200px", marginBottom: "30px" }}
      />
      <p className="read-the-docs">Soluciones tecnológicas para tu empresa</p>
    </div>
  );
}

export default Landing;

