import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Preloader } from './components/layout/Preloader';
import { PageTransition } from './components/layout/PageTransition';
import { CustomCursor } from './components/layout/CustomCursor';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { BrochurePage } from './pages/BrochurePage';

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
    <div className="min-h-screen bg-[#F4F1EA] text-[#242321] flex flex-col justify-between selection:bg-[#737565] selection:text-[#F4F1EA]">
      {/* Custom Soft Following Cursor */}
      <CustomCursor />

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
              {activeTab === 'brochure' && <BrochurePage />}
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
