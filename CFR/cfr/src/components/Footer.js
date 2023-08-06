import React from 'react'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from 'react-icons/fi'
import './CSS/footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container-section">
        <div className="information-section">
          <h3>Information</h3>
          <ul>
            <li>
              <a href="#Photovoltaïque">Photovoltaïque</a>
            </li>
            <li>
              <a href="#Isolation">Isolation</a>
            </li>
            <li>
              <a href="#Climatisation">Climatisation</a>
            </li>
            <li>
              <a href="#Ballon thermodynamique">Ballon thermodynamique</a>
            </li>
            <li>
              <a href="#Pompe à chaleur">Pompe à chaleur</a>
            </li>
          </ul>
        </div>

        <div className="contact-section">
          <h3>Contact</h3>
          <ul>
            <li>
              <FiMail />
              <a href="mailto:contact@cfr.fr">contact@cfr.fr</a>
            </li>
            <li>
              <FiPhone />
              <a href="tel:+661990349">06 61 99 03 49</a>
            </li>
            <li>
              <FiMapPin />
              <p>7, Boulevard Aristide briand, 14000 Caen</p>
            </li>
          </ul>
        </div>

        <div className="social-section">
          <h3>Nous suivre</h3>
          <p>
            Et pour plus d’informations,
            <br /> vous pouvez nous suivre sur nos réseaux sociaux !
          </p>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/cfr.energy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cfr.energy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/cfr-energy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="legal-section">
        <p>&copy; {new Date().getFullYear()} CFR - Mentions légales</p>
      </div>
    </footer>
  )
}

export default Footer
