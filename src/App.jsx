import Hero from './components/Hero';
import viteLogo from './assets/vite.svg';
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
      <header className="py-6">
        <div className="container mx-auto px-6 flex items-center justify-between gap-3">
          <a href="#" className="flex items-center gap-3">
            <img src={viteLogo} alt="FlowTech logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" loading="lazy" />
            <div className="flex gap-1 opacity-50" aria-hidden>
              <div className="w-2 h-2 bg-ft-blue"></div>
              <div className="w-2 h-2 bg-ft-blue/50"></div>
            </div>
            <span className="text-white text-lg sm:text-xl font-semibold">FlowTech</span>
          </a>
          <div className="hidden md:block">
            <button className="bg-ft-blue hover:bg-blue-600 text-white font-extrabold px-8 py-4 rounded-xl transition-all shadow-lg shadow-ft-blue/20">
              Arma tu pack ideal
            </button>
          </div>
        </div>
      </header>
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