import React from 'react'
import './CSS/informations.css'
const Informations = () => {
  return (
    <div className="container-information">
      <div className="container-information-banner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="elementor-shape-fill"
            d="M738,99l262-93V0H0v5.6L738,99z"
          ></path>
        </svg>
      </div>

      <div className="container-information-text">
        <h1 className="container-information-text-top">
          Un foyer écologique, économique et à votre image
        </h1>
        <h2 className="container-information-text-bottom">
          Explorez nos spécialités énergétiques pour une demeure au vert !
        </h2>
      </div>
      <div className="container-information-zone">
        <div className="container-information-zone-left">
          <div className="container-information-zone-left-top">
            <img
              src="/img/icon/photovoltaique.png"
              alt=" "
              className="information-img"
            />
            <h1 className="information-h1">PHOTOVOLTAÏQUE</h1>
            <h2 className="information-h2">
              L’énergie produite grâce au soleil
            </h2>
          </div>
          <div className="container-information-zone-left-bottom">
            <img
              src="/img/icon/isolation.png"
              alt=" "
              className="information-img"
            />
            <h1 className="information-h1">ISOLATION</h1>
            <h2 className="information-h2">L’énergie économisée</h2>
          </div>
        </div>
        <div className="container-information-zone-middle">
          <div className="container-information-zone-middle-top">
            <img
              src="/img/icon/climatisation.png"
              alt=" "
              className="information-img"
            />
            <h1 className="information-h1">CLIMATISATION</h1>
            <h2 className="information-h2">Le confort été hiver</h2>
          </div>
          <div className="container-information-zone-middle-bottom">
            <img
              src="/img/icon/pompe.png"
              alt=" "
              className="information-img"
            />
            <h1 className="information-h1">POMPE À CHALEUR</h1>
            <h2 className="information-h2">
              L’énergie produite par l’air et l’eau
            </h2>
          </div>
        </div>
        <div className="container-information-zone-right">
          <div className="container-information-zone-right-top">
            <img
              src="/img/icon/thermodynamique.png"
              alt=" "
              className="information-img"
            />
            <h1 className="information-h1">BALLON THERMODYNAMIQUE</h1>
            <h2 className="information-h2">Eau Chaude Sanitaire maîtrisée</h2>
          </div>
          <div className="container-information-zone-right-bottom">
            <img
              src="/img/icon/chiffre.png"
              alt=" "
              className="information-img"
            />
            <h1 className="information-h1">BILAN ÉNERGÉTIQUE</h1>
            <h2 className="information-h2">
              Étudier et comprendre avant d’investir.
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Informations
