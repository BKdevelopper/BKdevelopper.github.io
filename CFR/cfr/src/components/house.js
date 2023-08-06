import React from 'react'
import './CSS/house.css'
const House = () => {
  return (
    <div className="container-house">
      <div className="container-house-banner">
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
      <div className="container-house-text">
        <h1 className="container-house-text-h1">
          Décuplez la puissance énergétique de votre maison
        </h1>
        <h2 className="container-house-text-h2">
          Domptez l'énergie avec les astuces d'un génie de l'énergie !
        </h2>
        <h3 className="container-house-text-h3">
          Mettez entre nos mains l'analyse énergétique de votre logement pour
          des économies sensationnelles
        </h3>
      </div>
      <div className="container-house-img">
        <img src="/img/maison.png" className="maison" alt="" />
      </div>
    </div>
  )
}

export default House
