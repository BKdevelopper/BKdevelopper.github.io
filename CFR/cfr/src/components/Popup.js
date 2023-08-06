import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import './CSS/popup.css'

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 5000) // Affiche la popup après 5 secondes (5000 millisecondes)

    return () => clearTimeout(timer)
  }, [])

  const closePopup = () => {
    setShowPopup(false)
  }

  return showPopup ? (
    <div className="popup-container">
      <div className="popup-content">
        <button className="close-button" onClick={closePopup}>
          <FiX />
        </button>
        {/* Contenu de votre popup publicitaire */}
        <img
          src="/img/pub.png"
          alt="Popup Publicitaire"
          className="popup-image"
        />
        <button className="interested-button">Ça m'intéresse</button>
      </div>
    </div>
  ) : null
}

export default Popup
