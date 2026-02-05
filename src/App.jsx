import './App.css'
import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer'
import ContactSection from './componentes/ContactSection'
import CardsSection from './componentes/CardsSection'
import CarruselSection from './componentes/CarruselSection'

function App() {

  return (
    <div>
     <Navbar/>
     <ContactSection />
     <CardsSection/>
     <CarruselSection />
      <Footer/>
    </div>
  )
}

export default App
