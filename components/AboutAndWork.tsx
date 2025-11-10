import React from 'react';
import type { Project } from '../types';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const areas = [
  {
    title: 'Engenharia Electrotécnica',
    description: 'Desenvolvimento de projetos elétricos, sistemas de automação industrial, e monitoramento de sistemas de energia. Experiência em análise de qualidade de energia, optimização de consumo e integração de sensores e relés inteligentes em sistemas SCADA e IoT.',
  },
  {
    title: 'Desenvolvimento de Software',
    description: 'Criação de soluções digitais multiplataforma para engenharia e automação. Desenvolvimento de aplicações com Flutter, Python e Java, APIs REST e sistemas backend escaláveis com bancos de dados relacionais e temporais.',
  },
  {
    title: 'IoT e Electrónica',
    description: 'Concepção e implementação de dispositivos inteligentes conectados à nuvem (ESP32, Arduino). Criação de placas PCB personalizadas (KiCAD) e desenvolvimento de firmware embarcado para monitoramento, automação e controle remoto.',
  },
  {
    title: 'Inteligência Artificial & ML',
    description: 'Aplicação de Machine Learning para análise de dados, predição e otimização de sistemas. Experiência com Python, TensorFlow e InfluxDB para criar modelos que identificam padrões, preveem consumo e detectam anomalias.',
  },
  {
    title: 'Geotecnologia e SIG',
    description: 'Utilização de QGIS e Python para análise espacial, georreferenciação de ativos e integração de dados de sensores com mapas dinâmicos em projetos elétricos, energéticos e urbanos.',
  },
   {
    title: 'Energia e Sustentabilidade',
    description: 'Dimensionamento de sistemas fotovoltaicos, monitoramento de geração solar e integração com plataformas IoT. Desenvolvimento de ferramentas para análise de eficiência energética e gestão inteligente de consumo.',
  },
];

const projects: Project[] = [
  {
    title: 'Sistema de Irrigação Inteligente',
    description: 'Sistema automatizado de irrigação baseado em IoT e Machine Learning, que ajusta o uso de água conforme dados de sensores e previsão meteorológica, utilizando ESP32, MQTT e Grafana para monitoramento remoto.',
    image: 'assets/irriga.png',
    tags: ['TypeScript', 'React', 'PostgreSQL', 'InfluxDB', 'FastAPI', 'Python', 'MQTT', 'ESP32'],
  },
  {
    title: 'Home Assist',
    description: 'Assistente residencial para controle de iluminação, segurança e consumo de energia. Combina hardware customizado e um app em Flutter com API em Python (FastAPI) para automação e monitoramento em tempo real.',
    image: 'assets/home.png',
    tags: ['TypeScript', 'React', 'PostgreSQL', 'InfluxDB', 'FastAPI', 'Python', 'MQTT','ESP32'],
  },
  {
    title: 'E-mail Marketing',
    description: 'Aplicação interativa para aprendizado de inglês com reconhecimento de voz e IA generativa para avaliar pronúncia, criar diálogos e personalizar o conteúdo conforme o nível do utilizador.',
    image: 'assets/email.png',
    tags: ['TypeScript', 'React', 'PostgreSQL', 'FastAPI', 'Python'],
  },
  {
    title: 'Sistema de Automação Industrial',
    description: 'Ferramenta móvel para inspeção de sistemas elétricos em campo, com registo fotográfico, georreferenciação e checklists. Integrado a QGIS e InfluxDB para análise de dados e geração de relatórios.',
    image: 'assets/syncore.png',
    tags: ['TypeScript', 'React', 'PostgreSQL', 'InfluxDB', 'FastAPI', 'Python', 'MQTT', 'ESP32'],
  },

];

const AboutAndWork: React.FC = () => {
  return (
    <>
      {/* About Me Section */}
      <section id="about" className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center lg:text-left">Sobre Mim</h2>
             <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  Sou Filipe Jone, Engenheiro Electrotécnico e Desenvolvedor de Software, movido pela curiosidade e pelo desejo de criar soluções que conectam o mundo físico ao digital. Encontrei na tecnologia não apenas uma profissão, mas uma forma de resolver problemas reais e impulsionar a inovação em engenharia, energia e conectividade.
                </p>
                <p>
                  Minha formação em Engenharia Electrotécnica deu-me uma base sólida em sistemas elétricos, automação e eletrónica. Com o tempo, percebi que muitos desafios de engenharia podem ser resolvidos com software — e foi assim que mergulhei no desenvolvimento de aplicações inteligentes com Python, Java, Dart, Flutter e FastAPI.
                </p>
                <p>
                  Atuo na criação de sistemas integrados que unem hardware, sensores e software para gerar dados e eficiência. Tenho experiência em IoT, design de PCB, sistemas elétricos industriais e monitoramento em tempo real com InfluxDB e Grafana.
                </p>
                 <p>
                  Sou fundador da startup <a href="https://martel.co.mz" target="_blank" rel="noopener noreferrer" className="text-cyan-600 font-semibold hover:underline">Martel</a>, dedicada a soluções tecnológicas para energia, automação e IoT. Na Martel, lidero projetos que unem engenharia e inovação, com foco em sustentabilidade e impacto tecnológico no mercado africano e global.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section id="expertise" className="bg-slate-50 py-20 lg:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800">Áreas de Atuação</h2>
           <p className="mt-2 text-center text-slate-600 max-w-2xl mx-auto">
            Minha experiência abrange desde o design de sistemas elétricos complexos até o desenvolvimento de software inteligente que os controla.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {areas.map((area) => (
              <div key={area.title} className="bg-white p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-bold text-slate-800 mb-3">{area.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section id="work" className="bg-slate-100 py-20 lg:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800">Projetos em Destaque</h2>
          <p className="mt-2 text-center text-slate-600 max-w-2xl mx-auto">
            Uma seleção de trabalhos que demonstram a minha paixão por resolver problemas complexos e criar valor através da tecnologia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                  <p className="text-slate-600 mt-2 text-sm">{project.description}</p>
                   <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAndWork;
