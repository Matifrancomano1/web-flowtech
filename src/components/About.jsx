import { motion as Motion } from 'framer-motion';
import { Target, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-slate-900/50 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Columna de Texto */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Creamos soluciones que <span className="text-blue-500">fluyen</span> con tu negocio</h2>
            <p className="text-gray-400 mb-6 text-lg">
              En **FlowTech**, no solo escribimos código; diseñamos la infraestructura que permite a las empresas crecer sin límites. 
            </p>
            <p className="text-gray-400 mb-8">
              Nacimos con la idea de simplificar la complejidad técnica. Nos especializamos en conectar interfaces modernas con backends potentes y bases de datos seguras.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Target size={24} /></div>
                <div>
                  <h4 className="font-bold">Misión</h4>
                  <p className="text-gray-500 text-sm">Digitalizar negocios locales con tecnología de clase mundial.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500"><Zap size={24} /></div>
                <div>
                  <h4 className="font-bold">Eficacia</h4>
                  <p className="text-gray-500 text-sm">Despliegues rápidos y seguros en la nube.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500"><Lightbulb size={24} /></div>
                <div>
                  <h4 className="font-bold">Innovación</h4>
                  <p className="text-gray-500 text-sm">Despliegues rápidos y seguros en la nube.</p>
                </div>
              </div>
            </div>
          </Motion.div>

          {/* Columna de Imagen/Gráfico */}
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12">
               {/* Aquí podrías poner una foto tuya trabajando o el logo de FlowTech en grande */}
               <Lightbulb size={200} className="text-white/20 absolute -bottom-10 -right-10" />
               <p className="text-2xl font-bold text-center italic">"La mejor tecnología es la que se vuelve invisible y simplemente funciona."</p>
            </div>
            {/* Decoración */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border-2 border-slate-800 rounded-3xl"></div>
          </Motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;