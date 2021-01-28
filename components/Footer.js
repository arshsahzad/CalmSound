import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Built by{" "}
      <a href="https://arsh.link/arshdev" target="_blank" rel="noopener">
        Arsh Sahzad
      </a>
    </footer>
  );
};

export default Footer;
