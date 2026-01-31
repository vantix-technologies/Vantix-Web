import { useState, useEffect } from "react";
import imgSolDesarrollo from "../../assets/img_sol_desarrollo.png";
import imgSolCiberseguridad from "../../assets/img_sol_ciberseguridad.png";
import imgSolAutomatizacion from "../../assets/img_sol_automatizacion.png";
import imgSolNube from "../../assets/img_sol_cloud.png";
import imgSolAnalisis from "../../assets/img_sol_analisis.png";
import styles from "./Solutions.module.css";

function Solutions() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const solutions = [
    {
      image: imgSolDesarrollo,
      title: "Desarrollo de Software a Medida",
      description: "Creamos sistemas adaptados a las necesidades específicas de tu negocio: aplicaciones web, sistemas internos, plataformas administrativas y soluciones escalables."
    },
    {
      image: imgSolCiberseguridad,
      title: "Ciberseguridad y Protección de la Información",
      description: "Protegemos tus sistemas, redes y datos frente a amenazas digitales mediante auditorías, buenas prácticas, controles de acceso y monitoreo de seguridad."
    },
    {
      image: imgSolAutomatizacion,
      title: "Automatización de Procesos",
      description: "Optimizamos tareas repetitivas y manuales mediante automatización, reduciendo errores, tiempos y costos operativos."
    },
    {
      image: imgSolNube,
      title: "Infraestructura y Soluciones en la Nube",
      description: "Implementamos y administramos servidores, servicios cloud y entornos híbridos para garantizar disponibilidad, rendimiento y seguridad."
    },
    {
      image: imgSolAnalisis,
      title: "Análisis y Gestión de Información",
      description: "Transformamos datos en información útil mediante reportes, dashboards y sistemas de control para apoyar la toma de decisiones."
    }
  ];

  return (
    <section id="soluciones" className={styles.solutions}>
      <div className={styles.solutionsContainer}>
        <div className={styles.solutionsIntro}>
          <h2 className={styles.solutionsTitle}>Soluciones</h2>
          <p className={styles.solutionsDescription}>
            En VANTIX desarrollamos soluciones tecnológicas diseñadas para resolver problemas reales de las empresas, 
            optimizando procesos, protegiendo la información y facilitando la toma de decisiones.
          </p>
        </div>

        <div className={styles.solutionsGrid}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`${styles.solutionCard} ${index === hoveredIndex ? styles.highlighted : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={solution.image} alt={solution.title} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>{solution.title}</h3>
              <p className={styles.cardDescription}>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;