import { motion as Motion} from 'framer-motion';
import { Check, Zap, Building2, Globe } from 'lucide-react';

const packs = [
  {
    name: "Flow Lite",
    icon: <Zap className="text-orange-400" size={28} />,
    description: "Ideal para emprendedores y landing pages de alto impacto.",
    features: [
      "Diseño UI/UX Responsivo",
      "Formulario de Contacto Directo",
      "Optimización SEO Básica",
      "Despliegue en la Web"
    ]
  },
  {
    name: "Flow Business",
    icon: <Building2 className="text-blue-500" size={28} />,
    description: "Para empresas que necesitan gestionar datos y clientes.",
    features: [
      "Todo lo de Lite",
      "Backend",
      "Base de Datos",
      "Dashboard de Administración"
    ],
    highlight: true
  },
  {
    name: "Flow Enterprise",
    icon: <Globe className="text-purple-500" size={28} />,
    description: "Ecosistemas digitales completos y automatizados.",
    features: [
      "Todo lo de Business",
      "Integración de APIs externas",
      "Dominio",
      "Soporte y Mantenimiento 24/7"
    ]
  }
];

const Packs = () => {
  return (
    <section id="packs" className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Packs</h2>
          <p className="text-gray-400">Seleccioná el punto de partida para tu próximo gran proyecto.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packs.map((pack, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl border ${
                pack.highlight ? 'border-blue-500 bg-slate-900 shadow-2xl shadow-blue-500/10' : 'border-slate-800 bg-slate-900/50'
              } flex flex-col`}
            >
              <div className="mb-6 flex items-center gap-3">
                {pack.icon}
                <h3 className="text-2xl font-bold">{pack.name}</h3>
              </div>
              <p className="text-gray-400 mb-8 flex-grow">{pack.description}</p>
              
              <ul className="space-y-4 mb-8">
                {pack.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <Check size={18} className="text-blue-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Motion.div>
          ))}
        </div>

        {/* Botón Personalizado */}
        <div className="text-center">
          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            Arma tu pack ideal
          </Motion.button>
        </div>
      </div>
    </section>
  );
};

export default Packs;