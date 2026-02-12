import { motion as Motion } from 'framer-motion';
import { Code, Database, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texto de Presentación */}
        <Motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Impulsando el <span className="text-ft-blue">Futuro Digital</span> de tu Negocio
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            En FlowTech transformamos ideas en soluciones reales. Especialistas en Backend, arquitectura de datos y experiencias digitales de alto impacto.
          </p>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#packs" className="btn-primary">Arma tu pack ideal</a>
            <a href="#contacto" className="btn-white">Contáctanos</a>
          </div>
        </Motion.div>

        {/* Elemento Visual / Tarjetas de Especialidad */}
        <Motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="card text-center">
              <Code className="text-ft-blue mb-4 mx-auto" size={40} />
              <h3 className="text-lg font-bold mb-2">Desarrollo Web</h3>
        
            </div>
            <div className="card text-center">
              <Database className="text-purple-500 mb-4 mx-auto" size={40} />
              <h3 className="text-lg font-extrabold mb-2">Backend & DB</h3>
              
            </div>
            <div className="card text-center">
              <Rocket className="text-orange-400 mb-4 mx-auto" size={40} />
              <h3 className="text-lg font-extrabold mb-2">Escalabilidad</h3>
              
            </div>
          </div>
          {/* Un círculo decorativo de fondo */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>
        </Motion.div>

      </div>
    </section>
  );
};

export default Hero;