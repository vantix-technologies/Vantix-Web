import ServiceCard from "./ServiceCard";
import imgDesarrollo from "../../assets/img_desarrollo.png";
import imgAutomatizacion from "../../assets/img_automatizacion.png";
import imgCiberseguridad from "../../assets/img_ciberseguridad.png";
import imgInfraestructura from "../../assets/img_infraestructura.png";
import styles from "./Services.module.css";

function Services() {
  const services = [
    {
      image: imgDesarrollo,
      title: "Desarrollo de Software",
      items: [
        "Aplicaciones web y sistemas internos",
        "Sistemas administrativos y de gestión",
        "Integraciones con APIs y servicios externos",
        "Soluciones escalables y seguras"
      ]
    },
    {
      image: imgCiberseguridad,
      title: "Ciberseguridad",
      items: [
        "Evaluación de vulnerabilidades",
        "Hardening de servidores y redes",
        "Gestión de accesos y roles",
        "Buenas prácticas y asesoría en seguridad"
      ]
    },
    {
      image: imgInfraestructura,
      title: "Infraestructura y Redes",
      items: [
        "Configuración de servidores Linux y Windows",
        "Servicios en la nube (Azure, AWS, otros)",
        "Redes empresariales y seguridad perimetral",
        "Soporte y mantenimiento técnico"
      ]
    },
    {
      image: imgAutomatizacion,
      title: "Automatización y Soluciones Digitales",
      items: [
        "Automatización de procesos empresariales",
        "Dashboards y reportes personalizados",
        "Optimización de flujos de trabajo",
        "Soluciones a medida según el negocio"
      ]
    }
  ];

  return (
    <section id="servicios" className={styles.services}>
      <div className={styles.servicesHeader}>
        <h2 className={styles.servicesTitle}>Nuestros Servicios</h2>
        <p className={styles.servicesSubtitle}>
          Soluciones tecnológicas integrales para impulsar tu negocio
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            items={service.items}
          />
        ))}
      </div>
      <br />
    </section>
  );
}

export default Services;