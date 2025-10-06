import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import Logo from "../../assets/Logo.png";
import Close from "../../assets/close.png";
import Menu from "../../assets/Menu.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={style.nav}>
      <div className={style.Logo}>
        <img src={Logo} alt="AR Digital" />
      </div>

      {/* Desktop Links */}
      <div className={style.Links}>
        <ul>
          <li><Link to="#">SERVICES</Link></li>
          <li><Link to="#">ABOUT US</Link></li>
          <li><Link to="#">CONTACT US</Link></li>
          <li><Link to="#">CAREERS</Link></li>
        </ul>
      </div>

      {/* Toggle Button */}
      <button className={style.toggleBtn} onClick={toggleMenu} aria-label="Toggle menu">
        <img src={Menu} alt="Menu" />
      </button>

      {/* Sidebar Menu */}
      <div className={`${style.menu} ${menuOpen ? style.show : ""}`}>
        <ul>
          <li><Link to="#" onClick={closeMenu}>HOME</Link></li>
          <li><Link to="#" onClick={closeMenu}>SERVICES</Link></li>
          <li><Link to="#" onClick={closeMenu}>ABOUT US</Link></li>
          <li><Link to="#" onClick={closeMenu}>CONTACT US</Link></li>
          <li><Link to="#" onClick={closeMenu}>CAREERS</Link></li>
        </ul>
        <button className={style.closeBtn} onClick={closeMenu}><img src={Close} alt="Close Btn" /></button>
      </div>
    </nav>
  );
}
