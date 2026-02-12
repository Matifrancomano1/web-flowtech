import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    gmail: '',
    tel: ''
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulación local: no se envía nada a una base de datos por ahora.
    // Guardamos en consola para pruebas y mostramos éxito al usuario.
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log('Simulated submit (no DB):', formData);
      setStatus('success');
      setFormData({ name: '', lastname: '', gmail: '', tel: '' });
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      // Si algo falla en la simulación, mostramos error.
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-24 text-center text-white bg-slate-950">
        <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
        <h2 className="text-3xl font-bold">¡Mensaje enviado!</h2>
        <p className="text-gray-400 mt-2">En FlowTech nos pondremos en contacto pronto.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-blue-500 underline">Enviar otro mensaje</button>
      </div>
    );
  }

  return (
    <section id="contacto" className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Iniciemos tu Proyecto</h2>
          <p className="text-gray-400">Contanos tu idea y armemos el pack ideal para vos.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900 p-8 rounded-3xl border border-slate-800">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-400">Nombre</label>
            <input
              type="text"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-blue-500 outline-none transition-all"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-400">Apellido</label>
            <input
              type="text"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-blue-500 outline-none transition-all"
              value={formData.lastname}
              onChange={(e) => setFormData({...formData, lastname: e.target.value})}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2 text-gray-400">Email (Gmail)</label>
            <input
              type="email"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-blue-500 outline-none transition-all"
              value={formData.gmail}
              onChange={(e) => setFormData({...formData, gmail: e.target.value})}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2 text-gray-400">Teléfono / WhatsApp</label>
            <input
              type="tel"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-blue-500 outline-none transition-all"
              value={formData.tel}
              onChange={(e) => setFormData({...formData, tel: e.target.value})}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="md:col-span-2 bg-gradient-to-r from-ft-blue to-blue-500 hover:to-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-ft-blue/20 disabled:opacity-50"
          >
            {status === 'loading' ? 'Enviando...' : <><Send size={20} /> Enviar Consulta</>}
          </button>
          
          {status === 'error' && <p className="text-red-500 text-center md:col-span-2">Hubo un error. Intentá de nuevo.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;