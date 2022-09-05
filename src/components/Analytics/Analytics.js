import React from "react";
import styles from "./Analytics.module.scss";
import Laptop from "../../assets/laptop.jpeg";

export default function Analytics() {
  return (
    <div className={styles.analytics}>
      <div className={styles.container}>
        <img src={Laptop} alt="laptop" />
        <div>
          <p className={styles.mainParagraph}>Data analytics dashbord</p>
          <h1>Manage data Analytics Centrally</h1>
          <p>
            Est dolor duis culpa ullamco cillum aute aliqua anim officia
            ullamco. Cillum aliquip do exercitation fugiat. Ullamco culpa
            nostrud dolore nisi non et cupidatat duis minim proident incididunt
            esse sit dolore. Occaecat in nostrud magna irure laboris tempor
            fugiat ex sunt ipsum. Nostrud esse elit consectetur occaecat minim
            nulla do laborum Lorem exercitation aute.
          </p>
          <button className={styles.btn}>Get started</button>
        </div>
      </div>
    </div>
  );
}
