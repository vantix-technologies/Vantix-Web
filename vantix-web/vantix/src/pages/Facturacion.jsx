import logo from "../assets/img_anuncio_fact.png";
import "../App.css";

function Facturacion() {
  return (
    <div className="container" style={{ textAlign: "center", marginTop: "100px" }}>
      <img
        src={logo}
        alt="Logo Vantix"
        style={{ width: "500px", marginBottom: "50px" }}
      />
      <p className="read-the-docs">Detalles del sistema de facturación electronica</p>
      <p className="read-the-docs">by Vantix</p>
    </div>
  );
}

export default Facturacion;