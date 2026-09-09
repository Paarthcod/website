import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Preloader } from './components/layout/Preloader';
import { PageTransition } from './components/layout/PageTransition';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [loading, setLoading] = useState(true);

  // Initialize Lenis weighted cinematic smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#171717] flex flex-col justify-between selection:bg-[#B7A98F] selection:text-[#171717]">
      {/* Preloader Counter Screen */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* Main Application Container */}
      {!loading && (
        <>
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

          <main className="flex-1">
            <PageTransition activeTab={activeTab}>
              {activeTab === 'home' && <HomePage setActiveTab={setActiveTab} />}
              {activeTab === 'about' && <AboutPage />}
              {activeTab === 'projects' && <ProjectsPage />}
              {activeTab === 'contact' && <ContactPage />}
            </PageTransition>
          </main>

          <Footer setActiveTab={setActiveTab} />
        </>
      )}
    </div>
  );
}

export default App;
