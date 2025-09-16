import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, MessageCircle, Users, Fuel, Luggage } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'id' | 'en';
  selectedDestination?: string;
}

const BookingModal = ({ isOpen, onClose, language, selectedDestination }: BookingModalProps) => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedDestination || '',
    pickupDate: '',
    pickupTime: '',
    pickupLocation: '',
    destination: '',
    duration: '',
    passengers: '',
    message: ''
  });

  const content = {
    id: {
      title: "Booking Rental Mobil",
      subtitle: "Isi formulir untuk mendapatkan penawaran terbaik",
      selectCar: "Pilih Mobil",
      personalInfo: "Informasi Pribadi",
      tripDetails: "Detail Perjalanan", 
      form: {
        name: "Nama Lengkap",
        phone: "Nomor WhatsApp",
        email: "Email (Opsional)",
        service: "Layanan",
        pickupDate: "Tanggal Penjemputan",
        pickupTime: "Waktu Penjemputan",
        pickupLocation: "Lokasi Penjemputan",
        destination: "Tujuan",
        duration: "Durasi",
        passengers: "Jumlah Penumpang",
        message: "Pesan Tambahan",
        submit: "Kirim ke WhatsApp"
      },
      services: [
        "Rental Dalam Kota",
        "Rental Luar Kota", 
        "Lepas Kunci",
        "Antar Jemput Bandara",
        "Tour Bira",
        "Tour Toraja",
        "Tour Danau Tempe",
        "Tour Malino",
        "Tour Rammang-Rammang",
        "Custom Destinasi"
      ],
      durations: ["1 Hari", "2 Hari", "3 Hari", "4 Hari", "5 Hari", "1 Minggu", "Custom"],
      passengers: ["1 Orang", "2 Orang", "3 Orang", "4 Orang", "5 Orang", "6 Orang", "7 Orang"],
      required: "Wajib diisi"
    },
    en: {
      title: "Car Rental Booking",
      subtitle: "Fill the form to get the best offer",
      selectCar: "Select Car",
      personalInfo: "Personal Information",
      tripDetails: "Trip Details",
      form: {
        name: "Full Name",
        phone: "WhatsApp Number", 
        email: "Email (Optional)",
        service: "Service",
        pickupDate: "Pickup Date",
        pickupTime: "Pickup Time",
        pickupLocation: "Pickup Location",
        destination: "Destination",
        duration: "Duration",
        passengers: "Number of Passengers",
        message: "Additional Message",
        submit: "Send to WhatsApp"
      },
      services: [
        "City Rental",
        "Intercity Rental",
        "Self Drive",
        "Airport Transfer", 
        "Bira Tour",
        "Toraja Tour",
        "Lake Tempe Tour",
        "Malino Tour",
        "Rammang-Rammang Tour",
        "Custom Destination"
      ],
      durations: ["1 Day", "2 Days", "3 Days", "4 Days", "5 Days", "1 Week", "Custom"],
      passengers: ["1 Person", "2 People", "3 People", "4 People", "5 People", "6 People", "7 People"],
      required: "Required"
    }
  };

  const cars = [
    {
      name: "Toyota Avanza",
      category: language === 'id' ? "MPV Ekonomi" : "Economy MPV",
      capacity: language === 'id' ? "7 Orang" : "7 People",
      fuel: language === 'id' ? "Bensin" : "Petrol",
      luggage: language === 'id' ? "3 Koper" : "3 Bags",
      features: ["Manual", "AC", "Audio", language === 'id' ? "Ekonomis" : "Economical"],
      price: "350K/hari"
    },
    {
      name: "Honda CR-V",
      category: language === 'id' ? "SUV Premium" : "Premium SUV", 
      capacity: language === 'id' ? "5 Orang" : "5 People",
      fuel: language === 'id' ? "Bensin" : "Petrol",
      luggage: language === 'id' ? "4 Koper" : "4 Bags",
      features: ["Automatic", "AC", "Audio", language === 'id' ? "Nyaman" : "Comfortable"],
      price: "650K/hari"
    },
    {
      name: "Toyota Innova",
      category: language === 'id' ? "MPV Premium" : "Premium MPV",
      capacity: language === 'id' ? "7 Orang" : "7 People",
      fuel: "Diesel",
      luggage: language === 'id' ? "4 Koper" : "4 Bags",
      features: ["Manual/Auto", "AC", "Audio", language === 'id' ? "Luas" : "Spacious"],
      price: "500K/hari"
    },
    {
      name: "Mitsubishi Pajero",
      category: language === 'id' ? "SUV 4WD" : "4WD SUV",
      capacity: language === 'id' ? "7 Orang" : "7 People",
      fuel: "Diesel", 
      luggage: language === 'id' ? "5 Koper" : "5 Bags",
      features: ["4WD", "AC", "Audio", language === 'id' ? "Tangguh" : "Robust"],
      price: "800K/hari"
    }
  ];

  const t = content[language];
  const selectedCar = cars[currentCarIndex];

  const nextCar = () => {
    setCurrentCarIndex((prev) => (prev + 1) % cars.length);
  };

  const prevCar = () => {
    setCurrentCarIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatWhatsAppMessage = () => {
    const message = `
🚗 *BOOKING RENTAL MOBIL*

*Informasi Pribadi:*
• Nama: ${formData.name}
• WhatsApp: ${formData.phone}
• Email: ${formData.email || '-'}

*Detail Perjalanan:*
• Layanan: ${formData.service}
• Mobil Pilihan: ${selectedCar.name} (${selectedCar.price})
• Tanggal: ${formData.pickupDate}
• Waktu: ${formData.pickupTime}
• Lokasi Jemput: ${formData.pickupLocation}
• Tujuan: ${formData.destination}
• Durasi: ${formData.duration}
• Penumpang: ${formData.passengers}

*Pesan Tambahan:*
${formData.message || '-'}

---
Mohon konfirmasi ketersediaan dan harga final. Terima kasih! 🙏
    `.trim();

    return encodeURIComponent(message);
  };

  const handleSubmit = () => {
    // Validasi form
    if (!formData.name || !formData.phone || !formData.service || !formData.pickupDate) {
      toast({
        title: language === 'id' ? "Form Belum Lengkap" : "Incomplete Form",
        description: language === 'id' ? "Mohon isi semua field yang wajib" : "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp bisnis
    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: language === 'id' ? "Berhasil!" : "Success!",
      description: language === 'id' ? "Pesan Anda akan dikirim ke WhatsApp" : "Your message will be sent to WhatsApp"
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            {t.title}
          </DialogTitle>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </DialogHeader>

        <div className="space-y-8">
          {/* Car Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">{t.selectCar}</h3>
            <Card className="border-0 shadow-soft bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevCar}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  <div className="text-center flex-1 mx-4">
                    <h4 className="text-xl font-bold text-primary">{selectedCar.name}</h4>
                    <p className="text-secondary font-medium">{selectedCar.category}</p>
                    <p className="text-2xl font-bold text-secondary mt-2">{selectedCar.price}</p>
                  </div>
                  
                  <Button
                    variant="outline" 
                    size="sm"
                    onClick={nextCar}
                    className="rounded-full"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <Users className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm text-muted-foreground">{selectedCar.capacity}</div>
                  </div>
                  <div className="text-center">
                    <Fuel className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm text-muted-foreground">{selectedCar.fuel}</div>
                  </div>
                  <div className="text-center">
                    <Luggage className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm text-muted-foreground">{selectedCar.luggage}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {selectedCar.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">{t.personalInfo}</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">{t.form.name} *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder={t.form.name}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">{t.form.phone} *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="0812-3456-7890"
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t.form.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="email@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Trip Details */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">{t.tripDetails}</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="service">{t.form.service} *</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.form.service} />
                    </SelectTrigger>
                    <SelectContent>
                      {t.services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pickupDate">{t.form.pickupDate} *</Label>
                    <Input
                      id="pickupDate"
                      type="date"
                      value={formData.pickupDate}
                      onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="pickupTime">{t.form.pickupTime}</Label>
                    <Input
                      id="pickupTime"
                      type="time"
                      value={formData.pickupTime}
                      onChange={(e) => handleInputChange('pickupTime', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="pickupLocation">{t.form.pickupLocation}</Label>
                  <Input
                    id="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                    placeholder="Hotel, Bandara, Alamat..."
                  />
                </div>

                <div>
                  <Label htmlFor="destination">{t.form.destination}</Label>
                  <Input
                    id="destination"
                    value={formData.destination}
                    onChange={(e) => handleInputChange('destination', e.target.value)}
                    placeholder="Bira, Toraja, Malino..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="duration">{t.form.duration}</Label>
                    <Select value={formData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t.form.duration} />
                      </SelectTrigger>
                      <SelectContent>
                        {t.durations.map((duration) => (
                          <SelectItem key={duration} value={duration}>
                            {duration}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="passengers">{t.form.passengers}</Label>
                    <Select value={formData.passengers} onValueChange={(value) => handleInputChange('passengers', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t.form.passengers} />
                      </SelectTrigger>
                      <SelectContent>
                        {t.passengers.map((passenger) => (
                          <SelectItem key={passenger} value={passenger}>
                            {passenger}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Message */}
          <div>
            <Label htmlFor="message">{t.form.message}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder={language === 'id' ? 'Tambahan request atau catatan khusus...' : 'Additional requests or special notes...'}
              className="min-h-20"
            />
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            className="w-full bg-gradient-ocean hover:shadow-medium transition-smooth"
            size="lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            {t.form.submit}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;