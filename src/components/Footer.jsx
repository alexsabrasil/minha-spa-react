import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div>
        <p>&copy; 2023 Minha SPA React | Campinho Digital Programa Web Full Stack 2.2023</p>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/alexsatecnolog/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/alexsabrasil" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
