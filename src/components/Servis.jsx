import { motion as Motion} from 'framer-motion';
import { Layout, Server, Database, Smartphone, BarChart3, ShieldCheck, Rocket, AppWindow, Palette, Camera } from 'lucide-react';

const services = [
  {
    title: "Desarrollo Fullstack",
    description: "Creación de aplicaciones web completas.",
    icon: <Layout className="text-blue-500" size={32} />,
  },
  {
    title: "Diseño UI/UX",
    description: "Diseño de interfaces atractivas y funcionales.",
    icon: <Server className="text-purple-500" size={32} />,
  },
  
  {
    title: "Soluciones de E-commerce",
    description: "Desarrollo de tiendas online enfocadas en la conversión y la experiencia del usuario.",
    icon: <Smartphone className="text-orange-500" size={32} />,
  },
  {
    title: "Automatización de Procesos",
    description: "Integración de flujos de trabajo inteligentes para optimizar la gestión de datos en tu negocio.",
    icon: <BarChart3 className="text-pink-500" size={32} />,
  },
  {
    title: "Seguridad y Optimización",
    description: "Implementación de claves de seguridad (API Keys) y optimización de rendimiento en servidores.",
    icon: <ShieldCheck className="text-cyan-500" size={32} />,
  },
  {
    title: "Diseño de soluciones a medida",
    description: "Desarrollo de soluciones a medida basadas en las necesidades del cliente.",
    icon: <Rocket className="text-green-400" size={32} />,
  },
  {
    title:"Diseño de paginas webs",
    description: "Diseño de paginas webs basadas en las necesidades del cliente.",
    icon: <AppWindow className="text-pink-500" size={32} />,  
  },
  {
    title:"Diseño de contenido visual",
    description: "Diseño de flayers, banners, logos y todo lo relacionado con el contenido visual de tu negocio.",
    icon: <Palette className="text-indigo-500" size={32} />,  
  },
  {
    title:"Sesiones de foto y video",
    description: "Sesiones de foto y video para capturar la escencia de tu negocio.",
    icon: <Camera className="text-yellow-500" size={32} />,  
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Servicios Digitales</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones integrales diseñadas para escalar tu negocio en el entorno digital actual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="card text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;