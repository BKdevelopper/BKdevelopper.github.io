import './CSS/App.css'
import Navbar from './Navbar'
import Slider from './Slider'
import Informations from './Informations'
import PhotoGallery from './gallery'
import House from './house'
import Partners from './Partner'
import Footer from './Footer'
import Popup from './Popup'
function App() {
  return (
    <div className="App">
      <Popup />
      <Navbar />
      <Slider />

      <Informations />
      <PhotoGallery />
      <House />
      <Partners />
      <Footer />
    </div>
  )
}

export default App
