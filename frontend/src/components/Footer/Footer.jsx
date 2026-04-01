import {socialList} from "../../services/data";

const Footer = () => {
  return (
    <footer className=" text-white">
      <div className="container-fluid bg-primary">
        <div className="container-lg pt-4">
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
            <div className="col-lg-9">
              <p>Lyon</p>
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
                Ouvert du lundi au vendredi de{" "}
                <time dateTime="08:15">8h15</time> à{" "}
                <time dateTime="17:00">17h</time>
              </p>
              <a
                href="tel:+33(0)426734000"
                className="text-decoration-none text-reset"
              >
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="/assets/icons/phone.svg"
                    alt="Combiné téléphonique"
                    height="20"
                    width="20"
                  />
                  <p className="mb-0">+33 (0)4 26 73 40 00</p>
                </div>
              </a>
              <p>
                Accueil téléphonique du lundi au vendredi de{" "}
                <time dateTime="08:30">8h30</time> à{" "}
                <time dateTime="17:00">17h</time>
              </p>
              <div className="d-flex align-items-center gap-2">
                <img
                  src="/assets/icons/train.svg"
                  alt="Combiné téléphonique"
                  height="20"
                  width="20"
                />
                <p className="mb-0">+33 (0)4 26 73 40 00</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex flex-wrap justify-content-lg-center mb-0 column-gap-4">
            <p>Mentions légales</p>
            <p>Données personnelles</p>
            <p>Accessibilité : partiellement conforme</p>
            <p>Presse</p>
            <p>Marchés publics</p>
            <p>Venir à la Région</p>
            <p>Contacts</p>
            <p>Politique des cookies</p>
            <p>Gestion des cookies</p>
          </div>
        </div>
      </div>
      <div
        className="d-flex social-row justify-content-center m-3 column-gap-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        {socialList.map((social) => (
          <a key={social.name} href={social.url}>
            <img
              src={`/assets/icons/${social.name}.svg`}
              alt={social.alt}
              width="24"
              height="24"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
