import React from 'react';
// 1. Importe a imagem a partir do caminho relativo correto
// (Considerando que Header.tsx está em 'components' e a imagem em 'assets')
import filipeImage from '../assets/filipe.png';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-[#1d2b41] to-[#2c5364] text-white rounded-b-3xl shadow-2xl">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
          <img
            // 2. Use a variável que você importou aqui
            src={filipeImage}
            alt="Filipe Jone"
            className="w-40 h-40 md:w-48 md:h-48 rounded-2xl shadow-lg border-4 border-slate-500 object-cover"
          />
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Olá, sou Filipe Martins
            </h1>
            <p className="mt-4 text-lg md:text-xl text-cyan-200">
              Engenheiro Electrotécnico | Desenvolvedor de Software | Fundador da Martel
            </p>
            <p className="mt-2 text-md md:text-lg text-slate-300">
              Especialista em integração de hardware e software para criar soluções eficientes e inteligentes nas áreas de energia, automação e Internet das Coisas.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a href="#contact" className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Contactar
              </a>
              <a href="#work" className="bg-white hover:bg-slate-200 text-[#1d2b41] font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Ver Projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;