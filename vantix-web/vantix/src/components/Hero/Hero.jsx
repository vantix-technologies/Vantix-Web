import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Activar animaciones al cargar la página
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className={styles.hero}>
      {/* Overlay oscuro para móviles */}
      <div className={styles.heroOverlay}></div>
      
      <div className={`${styles.heroContent} ${isVisible ? styles.heroContentVisible : ''}`}>
        <h1 className={styles.heroTitle}>
          Soluciones tecnológicas
          <br />
          que impulsan tu negocio
        </h1>

        <p className={styles.heroSubtitle}>
          Desarrollo de software · Automatización
          <br />
          Ciberseguridad · Soluciones a medida
        </p>

        <div className={styles.heroButtons}>
          <button className={styles.heroBtnPrimary} onClick={() => scrollToSection('contacto')}>
            Solicitar cotización
          </button>

          <button className={styles.heroBtnSecondary} onClick={() => scrollToSection('servicios')}>
            Ver servicios
          </button>
        </div>
      </div>

      {/* Elementos decorativos animados */}
      <div className={styles.heroDecorations}>
        <div className={styles.heroCircle1}></div>
        <div className={styles.heroCircle2}></div>
        <div className={styles.heroCircle3}></div>
      </div>
    </section>
  );
}

export default Hero;