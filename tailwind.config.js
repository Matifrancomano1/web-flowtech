/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores extraídos del manual de identidad
        'ft-blue': '#0085FF',   // Azul Eléctrico (Innovación)
        'ft-dark': '#1A1A1A',   // Negro Antracita (Solidez)
        'ft-gray': '#F5F5F5',   // Gris claro para contrastes
      },
      fontFamily: {
        // Tipografía Nunito para terminales redondeadas
        nunito: ['Nunito', 'sans-serif'],
      },
      fontWeight: {
        'extrabold': '800', // Peso específico del manual
      }
    },
  },
  plugins: [],
}
