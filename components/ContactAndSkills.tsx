import React from 'react';
import type { SocialLink } from '../types';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { GithubIcon } from './icons/GithubIcon';
import { BehanceIcon } from './icons/BehanceIcon';

const skillCategories = [
  {
    category: 'Linguagens de Programação',
    skills: ['Python', 'Java', 'Dart (Flutter)', 'C/C++'],
  },
  {
    category: 'Frameworks e Bibliotecas',
    skills: ['Flutter', 'FastAPI', 'Flask', 'Node.js', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Dash', 'Plotly', 'Streamlit'],
  },
  {
    category: 'Bancos de Dados',
    skills: ['InfluxDB', 'PostgreSQL', 'SQLite', 'Firebase', 'MongoDB'],
  },
  {
    category: 'Hardware e IoT',
    skills: ['ESP32', 'Arduino', 'Modbus', 'MQTT', 'I2C', 'SPI', 'Sensores', 'Relés'],
  },
  {
    category: 'Design e Modelação',
    skills: ['AutoCAD', 'ArchiCAD', 'KiCAD', 'Fritzing', 'Proteus'],
  },
  {
    category: 'GIS e Análise Espacial',
    skills: ['QGIS', 'GeoPandas', 'Leaflet', 'PostGIS'],
  },
  {
    category: 'Infraestrutura e Integração',
    skills: ['Docker', 'Linux', 'Grafana', 'Nginx', 'MQTT Broker', 'Telegraf'],
  },
   {
    category: 'Controle de Versão',
    skills: ['Git', 'GitHub', 'GitLab', 'CI/CD'],
  },
];


const socialLinks: SocialLink[] = [
    { name: 'LinkedIn', icon: <LinkedinIcon />, url: 'https://linkedin.com/in/filipejone' },
    { name: 'GitHub', icon: <GithubIcon />, url: 'https://github.com/filipejone' },
    { name: 'Startup', icon: <BehanceIcon />, url: 'https://martel.co.mz' },
];


const ContactAndSkills: React.FC = () => {
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Mensagem enviada! (Isto é uma demonstração)');
    };

    return (
        <footer id="contact" className="bg-gradient-to-br from-[#1d2b41] to-[#2c5364] text-white rounded-t-3xl shadow-inner-top">
            <div className="container mx-auto px-6 py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Get in Touch Form */}
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Contacto</h2>
                        <p className="text-slate-300 mb-6">Tem um projeto em mente ou quer colaborar? Vamos conversar.</p>
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <input type="text" placeholder="Nome" required className="w-full bg-slate-100/10 border border-slate-500 rounded-lg p-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition" />
                            <input type="email" placeholder="Email" required className="w-full bg-slate-100/10 border border-slate-500 rounded-lg p-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition" />
                            <input type="text" placeholder="Assunto" className="w-full bg-slate-100/10 border border-slate-500 rounded-lg p-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition" />
                            <textarea placeholder="Mensagem" required rows={4} className="w-full bg-slate-100/10 border border-slate-500 rounded-lg p-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"></textarea>
                            <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>

                    {/* My Skillset */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Competências</h2>
                        <div className="space-y-6">
                            {skillCategories.map((categoryItem) => (
                              <div key={categoryItem.category}>
                                <h3 className="text-lg font-semibold text-cyan-300 mb-3">{categoryItem.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                  {categoryItem.skills.map(skill => (
                                    <span key={skill} className="bg-slate-100/10 text-slate-300 text-sm font-medium px-3 py-1 rounded-full">
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Social Links & Copyright */}
                <div className="text-center mt-20">
                    <div className="mb-8 text-slate-300">
                        <p className="font-semibold">Email: <a href="mailto:filipemartins@martel.co.mz" className="font-normal hover:text-cyan-400 transition-colors">filipemartins@martel.co.mz</a></p>
                        <p className="font-semibold">Telefone: <a href="tel:+258876080757" className="font-normal hover:text-cyan-400 transition-colors">876080757</a> – <a href="tel:+258849310401" className="font-normal hover:text-cyan-400 transition-colors">849310401</a></p>
                    </div>
                     <p className="text-slate-300 mb-4">Conecte-se comigo</p>
                    <div className="flex justify-center gap-6">
                       {socialLinks.map(link => (
                           <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-slate-400 hover:text-white transition-colors duration-300">
                               {React.cloneElement(link.icon as React.ReactElement, { className: "w-7 h-7" })}
                           </a>
                       ))}
                    </div>
                    <p className="mt-8 text-sm text-slate-500">&copy; {new Date().getFullYear()} Filipe Jone. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default ContactAndSkills;
