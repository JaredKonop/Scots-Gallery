import React from "react";
import styles from "../styles/footer.css"; // Import CSS module for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; 2024
        <a
          href="https://github.com/JaredKonop"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Jared Konop&nbsp;
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
