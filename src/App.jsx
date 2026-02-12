import Hero from './components/Hero';
import Services from './components/Servis';
import Packs from './components/Packs';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
//import './index.css';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen">

      {/*barra de navegacion*/ }
      <Navbar/>

      <main className="main-content w-full flex flex-col items-center gap-16">
        <Hero />
        {/*Nosotros*/}
        <About/>
        {/* Aquí irá tu carrusel de marcas */}
        <Services/>
        {/*agregado de packs*/}
        <Packs/>
        {/*agregado de formulario*/}
        <ContactForm/>
      </main>

      {/*footer*/}
      <Footer/>
    </div>
  );
}

export default App;