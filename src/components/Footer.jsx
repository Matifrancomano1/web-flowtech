import { motion as Motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Marca y Eslogan */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-blue-500 mb-4">FlowTech</h2>
            <p className="text-gray-400 leading-relaxed">
              Transformando el ADN digital de las empresas con soluciones robustas y escalables.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Inicio</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Servicios</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Packs</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Portfolio</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>hola@flowtech.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-500" />
                <span>Santa Fe, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-bold mb-6">Seguinos</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-slate-900 rounded-full hover:bg-blue-600 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-slate-900 rounded-full hover:bg-blue-600 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea final y Copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 FlowTech. Todos los derechos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
          >
            Volver arriba <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;