import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSelectorProps {
  isOpen: boolean;
  onLanguageSelect: (language: 'id' | 'en') => void;
}

const LanguageSelector = ({ isOpen, onLanguageSelect }: LanguageSelectorProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md border-0 shadow-strong bg-gradient-card">
        <DialogHeader className="text-center">
          <Globe className="mx-auto mb-4 h-12 w-12 text-primary" />
          <DialogTitle className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Choose Your Language / Pilih Bahasa
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Button
            onClick={() => onLanguageSelect('id')}
            variant="outline"
            size="lg"
            className="h-16 flex flex-col gap-2 hover:bg-gradient-ocean hover:text-white hover:border-primary transition-smooth"
          >
            <span className="text-2xl">🇮🇩</span>
            <span className="font-medium">Bahasa Indonesia</span>
          </Button>
          <Button
            onClick={() => onLanguageSelect('en')}
            variant="outline"
            size="lg" 
            className="h-16 flex flex-col gap-2 hover:bg-gradient-sunset hover:text-white hover:border-secondary transition-smooth"
          >
            <span className="text-2xl">🇺🇸</span>
            <span className="font-medium">English</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LanguageSelector;