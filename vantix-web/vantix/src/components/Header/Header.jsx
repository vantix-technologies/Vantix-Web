import { useState } from "react";
import logo from "../../assets/vantix_header.png";
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      
      // Cerrar menú móvil después de hacer clic
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img 
          src={logo} 
          alt="Logo Vantix" 
          className={styles.headerLogo}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMenuOpen(false);
          }}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Botón hamburguesa */}
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
        onClick={toggleMenu}
        aria-label="Menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menú de navegación */}
      <nav className={`${styles.headerMenu} ${isMenuOpen ? styles.headerMenuActive : ''}`}>
        <a onClick={() => scrollToSection('servicios')}>Servicios</a>
        <a onClick={() => scrollToSection('soluciones')}>Soluciones</a>
        <a onClick={() => scrollToSection('empresa')}>Empresa</a>
        
        <button 
          className={styles.headerButton} 
          onClick={() => scrollToSection('contacto')}
        >
          Contactar
        </button>
      </nav>
    </header>
  );
}

export default Header;