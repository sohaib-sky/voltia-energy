import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import ThemeSwitcher from './components/ThemeSwitcher';
import WhatsAppButton from './components/WhatsAppButton';
import StructuredData from './components/StructuredData';
import Hero from './sections/Hero';
import Experience3D from './sections/Experience3D';
import Flavors from './sections/Flavors';
import Ingredients from './sections/Ingredients';
import WhyVoltia from './sections/WhyVoltia';
import Story from './sections/Story';
import ProductInfo from './sections/ProductInfo';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

// Simple legal page components
const Privacy = () => (
  <main className="legal-page">
    <div className="container">
      <h2>Privacy Policy</h2>
      <p>Effective Date: {new Date().getFullYear()}</p>
      <h3>1. Information We Collect</h3>
      <p>This is a professional placeholder for VOLTIA's privacy policy. We respect your privacy and process data securely.</p>
      <h3>2. Use of Information</h3>
      <p>We use information to provide, maintain, and improve our services, process transactions, and send related information.</p>
      <a href="#/" className="btn btn-outline" style={{ marginTop: '2rem' }}>RETURN TO MAIN SITE</a>
    </div>
  </main>
);

const Terms = () => (
  <main className="legal-page">
    <div className="container">
      <h2>Terms of Service</h2>
      <p>Effective Date: {new Date().getFullYear()}</p>
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing or using VOLTIA, you agree to these Terms. This is a placeholder legal structure.</p>
      <h3>2. Product Use</h3>
      <p>VOLTIA is intended for healthy adults. Consult a physician before consuming if you have medical conditions.</p>
      <a href="#/" className="btn btn-outline" style={{ marginTop: '2rem' }}>RETURN TO MAIN SITE</a>
    </div>
  </main>
);

function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === '#/privacy') {
    return <><StructuredData /><Navigation /><Privacy /><ThemeSwitcher /><WhatsAppButton /><Footer /></>;
  }

  if (route === '#/terms') {
    return <><StructuredData /><Navigation /><Terms /><ThemeSwitcher /><WhatsAppButton /><Footer /></>;
  }

  return (
    <>
      <StructuredData />
      <Navigation />
      <main>
        <Hero />
        <Experience3D />
        <Flavors />
        <Ingredients />
        <WhyVoltia />
        <Story />
        <ProductInfo />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <ThemeSwitcher />
      <WhatsAppButton />
    </>
  );
}

export default App;
