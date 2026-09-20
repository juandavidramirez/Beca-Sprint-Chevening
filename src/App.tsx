import React, { useState, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { CheveningPage } from './components/CheveningPage';
import { ModalInterest } from './components/ModalInterest';
import { ThemeMode } from './types';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('system');
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname === '/chevening-sprint' ? '/chevening-sprint' : '/'
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>('Chevening Sprint');
  const [initialMessage, setInitialMessage] = useState<string>('Me interesa. Quisiera tener más información.');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname === '/chevening-sprint' ? '/chevening-sprint' : '/';
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('beca-sprint-theme') as ThemeMode | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  const applyTheme = (newTheme: ThemeMode) => {
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      root.classList.add('dark');
    } else if (newTheme === 'light') {
      root.setAttribute('data-theme', 'light');
      root.classList.remove('dark');
    } else {
      root.removeAttribute('data-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  };

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('beca-sprint-theme', nextTheme);
    applyTheme(nextTheme);
  };

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (
    program: string = 'Chevening Sprint',
    msg: string = 'Me interesa. Quisiera tener más información.'
  ) => {
    setSelectedProgram(program);
    setInitialMessage(msg);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] antialiased transition-colors duration-200 flex flex-col justify-between">
      {currentPath === '/chevening-sprint' ? (
        <CheveningPage
          theme={theme}
          toggleTheme={toggleTheme}
          onBackToHome={() => navigateTo('/')}
          onOpenInterest={(prog, msg) => handleOpenModal(prog || 'Chevening Sprint', msg)}
        />
      ) : (
        <HomePage
          theme={theme}
          toggleTheme={toggleTheme}
          onOpenModal={(prog, msg) => handleOpenModal(prog || 'Chevening Sprint', msg)}
          onNavigateToChevening={() => navigateTo('/chevening-sprint')}
        />
      )}

      {/* Pop-up unificado para todos los CTAs */}
      <ModalInterest
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProgram={selectedProgram}
        initialMessage={initialMessage}
      />
    </div>
  );
}
