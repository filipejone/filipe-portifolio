
import React from 'react';
import Header from './components/Header';
import AboutAndWork from './components/AboutAndWork';
import ContactAndSkills from './components/ContactAndSkills';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      <main>
        <Header />
        <AboutAndWork />
        <ContactAndSkills />
      </main>
    </div>
  );
};

export default App;
