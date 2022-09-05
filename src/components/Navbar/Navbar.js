import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styles from "./Navbar.module.scss";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>React.</h1>
      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div onClick={handleNav} className={styles.burger}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? styles.burgerNav : styles.burgerNavHidden}>
        <h1 className={styles.burgerLogo}>React.</h1>
        <ul className={styles.burgerNavLinks}>
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
