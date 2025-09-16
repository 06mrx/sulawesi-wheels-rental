import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Fuel, Luggage, Car } from "lucide-react";
import fleetImage from "@/assets/fleet.jpg";

interface FleetProps {
  language: 'id' | 'en';
}

const Fleet = ({ language }: FleetProps) => {
  const content = {
    id: {
      title: "Pilihan Kendaraan",
      subtitle: "Armada lengkap untuk setiap kebutuhan perjalanan Anda",
      cta: "Pilih Mobil",
      available: "Tersedia",
      cars: [
        {
          name: "Toyota Avanza",
          category: "MPV Ekonomi",
          capacity: "7 Orang",
          fuel: "Bensin",
          luggage: "3 Koper",
          features: ["Manual", "AC", "Audio", "Ekonomis"],
          price: "350K/hari"
        },
        {
          name: "Honda CR-V",
          category: "SUV Premium",
          capacity: "5 Orang", 
          fuel: "Bensin",
          luggage: "4 Koper",
          features: ["Automatic", "AC", "Audio", "Nyaman"],
          price: "650K/hari"
        },
        {
          name: "Toyota Innova",
          category: "MPV Premium",
          capacity: "7 Orang",
          fuel: "Solar",
          luggage: "4 Koper", 
          features: ["Manual/Auto", "AC", "Audio", "Luas"],
          price: "500K/hari"
        },
        {
          name: "Mitsubishi Pajero",
          category: "SUV 4WD",
          capacity: "7 Orang",
          fuel: "Solar",
          luggage: "5 Koper",
          features: ["4WD", "AC", "Audio", "Tangguh"],
          price: "800K/hari"
        }
      ]
    },
    en: {
      title: "Vehicle Selection", 
      subtitle: "Complete fleet for all your travel needs",
      cta: "Choose Car",
      available: "Available",
      cars: [
        {
          name: "Toyota Avanza",
          category: "Economy MPV",
          capacity: "7 People",
          fuel: "Petrol",
          luggage: "3 Bags",
          features: ["Manual", "AC", "Audio", "Economical"],
          price: "350K/day"
        },
        {
          name: "Honda CR-V", 
          category: "Premium SUV",
          capacity: "5 People",
          fuel: "Petrol",
          luggage: "4 Bags",
          features: ["Automatic", "AC", "Audio", "Comfortable"],
          price: "650K/day"
        },
        {
          name: "Toyota Innova",
          category: "Premium MPV",
          capacity: "7 People",
          fuel: "Diesel",
          luggage: "4 Bags",
          features: ["Manual/Auto", "AC", "Audio", "Spacious"],
          price: "500K/day"
        },
        {
          name: "Mitsubishi Pajero",
          category: "4WD SUV",
          capacity: "7 People", 
          fuel: "Diesel",
          luggage: "5 Bags",
          features: ["4WD", "AC", "Audio", "Robust"],
          price: "800K/day"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Fleet Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-medium">
          <img 
            src={fleetImage} 
            alt="Car Fleet"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {t.cars.map((car, index) => (
            <Card 
              key={index}
              className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white/70 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl text-primary">{car.name}</CardTitle>
                    <CardDescription className="text-secondary font-medium">
                      {car.category}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {t.available}
                  </Badge>
                </div>
                
                <div className="text-2xl font-bold text-secondary">
                  {car.price}
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Users className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm text-muted-foreground">{car.capacity}</div>
                  </div>
                  <div className="text-center">
                    <Fuel className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm text-muted-foreground">{car.fuel}</div>
                  </div>
                  <div className="text-center">
                    <Luggage className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm text-muted-foreground">{car.luggage}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {car.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <Button 
                  className="w-full bg-gradient-ocean hover:shadow-medium transition-smooth"
                  size="sm"
                >
                  <Car className="mr-2 h-4 w-4" />
                  {t.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;