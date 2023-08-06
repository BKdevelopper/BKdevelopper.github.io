import React from 'react'
import './CSS/partners.css'

const Partners = () => {
  // Remplacez les liens et images ci-dessous par les logos de vos partenaires
  const partners = [
    {
      id: 1,
      name: 'Partner 1',
      logo: 'https://www.esd-energie.fr/wp-content/uploads/2022/12/Logo.png',
    },
    {
      id: 2,
      name: 'Partner 2',
      logo: 'https://static.wixstatic.com/media/f96bcc_58ef8123248444d3b17813d9eb97fe45~mv2.jpg/v1/fill/w_150,h_40,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f96bcc_58ef8123248444d3b17813d9eb97fe45~mv2.jpg',
    },

    // Ajoutez d'autres partenaires ici
  ]
  const qualifications = [
    {
      id: 1,
      name: 'Qualification 1',
      logo: 'https://www.qualit-enr.org/wp-content/uploads/2020/08/logo-QualiPV-2023-RGE_sc-png.png',
    },
    {
      id: 2,
      name: 'Qualification 2',
      logo: 'https://www.qualit-enr.org/wp-content/uploads/2022/12/logo-QualiPAC-2023-RGE_sc-png.png',
    },
    {
      id: 3,
      name: 'Qualification 3',
      logo: 'https://www.qualit-enr.org/wp-content/uploads/2020/08/logo-Qualisol-2023-RGE_sc-png.png',
    },
    {
      id: 4,
      name: 'Qualification 4',
      logo: 'https://www.habitat-reference.com/wp-content/uploads/2022/04/habitat-reference-partenaire-edf.png',
    },

    // Ajoutez d'autres qualifications ici
  ]
  return (
    <div className="partners-container">
      <h2>Partenaires</h2>
      <div className="partners-list">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-item">
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>

      <h2>Les qualifications de nos partenaires</h2>
      <div className="qualifications-list">
        {qualifications.map((qualification) => (
          <div key={qualification.id} className="qualification-item">
            <img src={qualification.logo} alt={qualification.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners
