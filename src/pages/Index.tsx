import { useState, useEffect } from "react";
import LanguageSelector from "@/components/LanguageSelector";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Fleet from "@/components/Fleet";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<'id' | 'en' | null>(null);
  const [showLanguageSelector, setShowLanguageSelector] = useState(true);

  useEffect(() => {
    // Check if user has previously selected a language
    const savedLanguage = localStorage.getItem('selectedLanguage') as 'id' | 'en' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
      setShowLanguageSelector(false);
    }
  }, []);

  const handleLanguageSelect = (selectedLanguage: 'id' | 'en') => {
    setLanguage(selectedLanguage);
    setShowLanguageSelector(false);
    localStorage.setItem('selectedLanguage', selectedLanguage);
  };

  const handleLanguageChange = () => {
    setShowLanguageSelector(true);
  };

  if (!language) {
    return (
      <LanguageSelector 
        isOpen={showLanguageSelector}
        onLanguageSelect={handleLanguageSelect}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Hero language={language} onLanguageChange={handleLanguageChange} />
      <Services language={language} />
      <Destinations language={language} />
      <Fleet language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
