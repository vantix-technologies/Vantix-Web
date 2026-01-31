import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Anuncio.module.css";

function Anuncio() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Mostrar el anuncio después de 5 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Bloquear scroll cuando el modal está visible
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleVerDetalles = () => {
    setIsVisible(false);
    navigate("/facturacion");
  };

  if (!isVisible) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose}>
          ×
        </button>

        <div className={styles.modalHeader}>
          <div className={styles.badge}>NUEVO</div>
          <h2 className={styles.modalTitle}>
            Sistema de Facturación Electrónica
          </h2>
          <p className={styles.modalSubtitle}>
            Simplifica tu facturación y cumple con todas las regulaciones
          </p>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.featuresList}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>✓</div>
              <span>Cumplimiento normativo garantizado</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>✓</div>
              <span>Emisión de facturas en segundos</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>✓</div>
              <span>Integración con tu sistema actual</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>✓</div>
              <span>Reportes y análisis en tiempo real</span>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <p className={styles.ctaText}>
              Moderniza tu proceso de facturación hoy mismo
            </p>
            <button className={styles.ctaButton} onClick={handleVerDetalles}>
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anuncio;