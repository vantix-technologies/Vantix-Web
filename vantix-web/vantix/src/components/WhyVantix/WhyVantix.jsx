import imgWhyVantix from "../../assets/img_whyvantix.png";
import styles from "./WhyVantix.module.css";

function WhyVantix() {
  const features = [
    "Soluciones a medida",
    "Tecnología moderna",
    "Seguridad integrada",
    "Soporte cercano"
  ];

  const CheckIcon = () => (
    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#4A9FD8"/>
      <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section id="whyvantix" className={styles.whyVantix}>
      <div className={styles.whyVantixContent}>
        <div className={styles.whyVantixLeft}>
          <h2 className={styles.whyVantixTitle}>¿Por qué elegir VANTIX?</h2>
          <ul className={styles.whyVantixList}>
            {features.map((feature, index) => (
              <li key={index}>
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.whyVantixRight}>
          <img src={imgWhyVantix} alt="Por qué elegir Vantix" className={styles.whyVantixImage} />
        </div>
      </div>
    </section>
  );
}

export default WhyVantix;