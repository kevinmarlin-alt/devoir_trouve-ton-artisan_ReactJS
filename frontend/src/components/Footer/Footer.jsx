import { Link } from 'react-router'
import {socialList} from "../../services/data";

import './Footer.css'

const Footer = () => {

  const socialIcons = document.querySelectorAll('.social-row a img')

  socialIcons.forEach((socialIcon) => {
    const socialName = socialIcon.title
    socialIcon.addEventListener('mouseover', () => {
      socialIcon.src = `/assets/icons/social-${socialName}-blue.svg`
    })
    socialIcon.addEventListener('mouseout', () => {
      socialIcon.src = `/assets/icons/social-${socialName}-gray.svg`
    })
  })
  return (
    <footer className=" text-white">
      <div className="container-fluid" style={{backgroundColor: "#0074c7"}}>
        <div className="container-lg py-4">
          <img
            className="mb-4"
            src="/assets/images/Logo_white.png"
            alt="Logo Trouve ton artisan ! Avec la région Auvergne-Rhône-Alpes"
            height="75"
          />
          <div className="row mb-4">
            <div className="col-lg-3">
              <p>
                Conseil régional
                <br />
                Auvergne-Rhône-Alpes
              </p>
            </div>
            <address className="col-lg-9">
              <p style={{fontWeight: 'bold'}}>Lyon</p>
              <p>
                101 cours Charlemagne
                <br />
                CS 20033
                <br />
                69269 LYON CEDEX 02
                <br />
                France
              </p>
              <p>
                Ouvert du lundi au vendredi de <time dateTime="08:15">8h15</time> à <time dateTime="17:00">17h</time>
              </p>
              <a
                href="tel:+33(0)426734000"
                className="text-decoration-none text-reset nav nav-link"
              >
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img
                    src="/assets/icons/phone-white.svg"
                    alt="Combiné téléphonique"
                    height="30"
                    width="30"
                  />
                  <p className="mb-0">+33 (0)4 26 73 40 00</p>
                </div>
              </a>
              <p>
                Accueil téléphonique du lundi au vendredi de <time dateTime="08:30">8h30</time> à <time dateTime="17:00">17h</time>
              </p>
              <div className="d-flex align-items-center gap-2">
                <img
                  src="/assets/icons/train-white.svg"
                  alt="Combiné téléphonique"
                  height="30"
                  width="30"
                />
                <p className="mb-0">Trams T1 et T2 - Arrêt Hôtel de Région - Montrochet</p>
              </div>

            </address>
          </div>
          <hr />
          <nav>
            <ul className='nav justify-content-lg-center gap-0 column-gap-3' >
                <li className="nav-item">
                  <Link className='nav-link text-reset px-0' to='/pending'>Mentions légales</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link text-reset px-0' to='/pending'>Données personnelles</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link text-reset px-0' to='/pending'>Accessibilité : partiellement conforme</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link text-reset px-0' to='/pending'>Presse</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link text-reset px-0' to='/pending'>Marchés publics</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link text-reset px-0' to='/pending'>Venir à la Région</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link text-reset px-0' to='/pending'>Contacts</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link text-reset px-0' to='/pending'>Politique des cookies</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link text-reset px-0' to='/pending'>Gestion des cookies</Link>
                </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className="d-flex social-row justify-content-center m-3 column-gap-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        {socialList.map((social) => (
          <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
            <img
              src={`/assets/icons/social-${social.name}-gray.svg`}
              alt={social.alt}
              width="24"
              height="24"
              className='socialIcon'
              title={social.name}
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
