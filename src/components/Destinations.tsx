import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import biraImage from "@/assets/hero-bira.jpg";
import torajaImage from "@/assets/toraja.jpg";
import tempeImage from "@/assets/tempe.jpg";
import malinoImage from "@/assets/malino.jpg";
import rammangImage from "@/assets/rammang.jpg";

interface DestinationsProps {
  language: 'id' | 'en';
}

const Destinations = ({ language }: DestinationsProps) => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");

  const content = {
    id: {
      title: "Destinasi Wisata Populer",
      subtitle: "Jelajahi keindahan Sulawesi Selatan bersama kami",
      cta: "Pesan Sekarang",
      custom: "Custom Destinasi",
      destinations: [
        {
          name: "Pantai Bira",
          image: biraImage,
          duration: "2-3 Hari",
          capacity: "1-7 Orang",
          description: "Pantai dengan pasir putih dan air laut jernih, surga tersembunyi di ujung selatan Sulawesi."
        },
        {
          name: "Toraja",
          image: torajaImage,
          duration: "3-4 Hari", 
          capacity: "1-7 Orang",
          description: "Budaya unik, rumah adat Tongkonan, dan pemandangan pegunungan yang menakjubkan."
        },
        {
          name: "Danau Tempe",
          image: tempeImage,
          duration: "1 Hari",
          capacity: "1-7 Orang",
          description: "Danau alami dengan kehidupan nelayan tradisional dan pemandangan yang mempesona."
        },
        {
          name: "Malino",
          image: malinoImage,
          duration: "1-2 Hari",
          capacity: "1-7 Orang",
          description: "Kawasan dataran tinggi dengan udara sejuk, perkebunan teh, dan pemandangan alam yang indah."
        },
        {
          name: "Rammang-Rammang",
          image: rammangImage,
          duration: "1 Hari",
          capacity: "1-7 Orang",
          description: "Kawasan karst terbesar kedua di dunia dengan formasi batu kapur yang spektakuler."
        }
      ]
    },
    en: {
      title: "Popular Tour Destinations",
      subtitle: "Explore the beauty of South Sulawesi with us",
      cta: "Book Now",
      custom: "Custom Destinations",
      destinations: [
        {
          name: "Bira Beach",
          image: biraImage,
          duration: "2-3 Days",
          capacity: "1-7 People",
          description: "Beach with white sand and crystal clear sea water, a hidden paradise at the southern tip of Sulawesi."
        },
        {
          name: "Toraja",
          image: torajaImage,
          duration: "3-4 Days",
          capacity: "1-7 People", 
          description: "Unique culture, traditional Tongkonan houses, and stunning mountain views."
        },
        {
          name: "Lake Tempe",
          image: tempeImage,
          duration: "1 Day",
          capacity: "1-7 People",
          description: "Natural lake with traditional fishing life and charming scenery."
        },
        {
          name: "Malino",
          image: malinoImage,
          duration: "1-2 Days",
          capacity: "1-7 People",
          description: "Highland area with cool air, tea plantations, and beautiful natural scenery."
        },
        {
          name: "Rammang-Rammang",
          image: rammangImage,
          duration: "1 Day",
          capacity: "1-7 People",
          description: "The world's second largest karst area with spectacular limestone formations."
        }
      ]
    }
  };

  const t = content[language];

  const handleBookNow = (destinationName: string) => {
    const serviceMap = {
      id: {
        "Pantai Bira": "Tour Bira",
        "Toraja": "Tour Toraja", 
        "Danau Tempe": "Tour Danau Tempe",
        "Malino": "Tour Malino",
        "Rammang-Rammang": "Tour Rammang-Rammang"
      },
      en: {
        "Bira Beach": "Bira Tour",
        "Toraja": "Toraja Tour",
        "Lake Tempe": "Lake Tempe Tour", 
        "Malino": "Malino Tour",
        "Rammang-Rammang": "Rammang-Rammang Tour"
      }
    };
    
    setSelectedDestination(serviceMap[language][destinationName] || "Custom Destinasi");
    setShowBookingModal(true);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t.subtitle}
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-secondary text-secondary hover:bg-gradient-sunset hover:text-white transition-smooth"
            onClick={() => {
              setSelectedDestination("Custom Destinasi");
              setShowBookingModal(true);
            }}
          >
            <MapPin className="mr-2 h-5 w-5" />
            {t.custom}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.destinations.map((destination, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-0 shadow-soft hover:shadow-medium transition-smooth group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {destination.capacity}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-ocean hover:shadow-medium transition-smooth"
                  size="sm"
                  onClick={() => handleBookNow(destination.name)}
                >
                  {t.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        language={language}
        selectedDestination={selectedDestination}
      />
    </section>
  );
};

export default Destinations;