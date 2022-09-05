import React from "react";
import styles from "./Hero.module.scss";
import Typed from "react-typed";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <p className={styles.heroGreanParagraph}>Growing with data Analytics</p>
        <h1>Grow with Data</h1>
        <div>
          <p>Fast, flexible financing for</p>
          <Typed
            className={styles.typed}
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className={styles.lastParagraph}>
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          flatform
        </p>
        <button className={styles.btn}>Get started</button>
      </div>
    </div>
  );
}
