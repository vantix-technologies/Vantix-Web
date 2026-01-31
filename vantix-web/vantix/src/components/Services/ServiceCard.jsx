import styles from "./ServiceCard.module.css";

function ServiceCard({ image, title, items }) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceIcon}>
        <img src={image} alt={title} className={styles.serviceImage} />
      </div>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <ul className={styles.serviceList}>
        {items.map((item, index) => (
          <li key={index} className={styles.serviceItem}>
            <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" fill="#E8F4FA" stroke="#005FA3" strokeWidth="1.5"/>
              <path d="M6 10L9 13L14 7" stroke="#005FA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceCard;