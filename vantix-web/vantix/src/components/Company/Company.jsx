import styles from "./Company.module.css";

function Company() {
  const values = [
    "Compromiso con el cliente",
    "Seguridad y confidencialidad",
    "Innovación constante",
    "Responsabilidad profesional",
    "Trabajo colaborativo"
  ];

  return (
    <section id="empresa" className={styles.company}>
      <div className={styles.companyContainer}>
        {/* Quiénes somos */}
        <div className={styles.aboutSection}>
          <h2 className={styles.mainTitle}>¿Quiénes somos?</h2>
          <p className={styles.aboutDescription}>
            VANTIX es una empresa de tecnología enfocada en el desarrollo de software, 
            ciberseguridad y soluciones digitales para empresas que buscan crecer de forma 
            segura y eficiente.
          </p>
        </div>

        {/* Misión, Visión y Valores en 3 columnas */}
        <div className={styles.threeColumnsGrid}>
          {/* Misión */}
          <div className={styles.columnCard}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#005FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#005FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#005FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.sectionTitle}>Misión</h3>
            <p className={styles.sectionDescription}>
              Brindar soluciones tecnológicas innovadoras, seguras y adaptadas a cada cliente, 
              contribuyendo a la optimización de sus procesos y al crecimiento de su negocio.
            </p>
          </div>

          {/* Visión */}
          <div className={styles.columnCard}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="#005FA3" strokeWidth="2"/>
                <path d="M12 5V3M12 21V19M19 12H21M3 12H5" stroke="#005FA3" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16.95 7.05L18.36 5.64M5.64 18.36L7.05 16.95M16.95 16.95L18.36 18.36M5.64 5.64L7.05 7.05" stroke="#005FA3" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className={styles.sectionTitle}>Visión</h3>
            <p className={styles.sectionDescription}>
              Ser una empresa referente en soluciones tecnológicas y ciberseguridad en la región, 
              reconocida por la calidad, confiabilidad y enfoque en el cliente.
            </p>
          </div>

          {/* Valores */}
          <div className={styles.columnCard}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none">
                <path d="M20 7L10 17L5 12" stroke="#005FA3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 7L10 17" stroke="#005FA3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.sectionTitle}>Valores</h3>
            <div className={styles.valuesSimpleList}>
              {values.map((value, index) => (
                <div key={index} className={styles.valueSimpleItem}>
                  <svg className={styles.checkSmall} viewBox="0 0 20 20" fill="none">
                    <path d="M4 10L8 14L16 6" stroke="#005FA3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className={styles.valueSimpleText}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;