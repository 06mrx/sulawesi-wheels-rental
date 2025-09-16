import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

interface ContactProps {
  language: 'id' | 'en';
}

const Contact = ({ language }: ContactProps) => {
  const content = {
    id: {
      title: "Hubungi Kami",
      subtitle: "Siap melayani Anda 24/7 untuk perjalanan terbaik di Sulawesi",
      form: {
        name: "Nama Lengkap",
        email: "Email",
        phone: "Nomor WhatsApp",
        destination: "Destinasi/Layanan",
        message: "Pesan Anda",
        submit: "Kirim Pesan"
      },
      info: {
        phone: {
          title: "Telepon & WhatsApp",
          value: "+62 812-3456-7890",
          desc: "Hubungi kami kapan saja"
        },
        email: {
          title: "Email",
          value: "info@sulawesicarrental.com", 
          desc: "Respon dalam 1 jam"
        },
        location: {
          title: "Lokasi",
          value: "Makassar, Sulawesi Selatan",
          desc: "Pickup tersedia se-Makassar"
        },
        hours: {
          title: "Jam Operasional",
          value: "24/7",
          desc: "Siap melayani setiap saat"
        }
      },
      whatsapp: "Chat WhatsApp"
    },
    en: {
      title: "Contact Us",
      subtitle: "Ready to serve you 24/7 for the best journey in Sulawesi",
      form: {
        name: "Full Name",
        email: "Email",
        phone: "WhatsApp Number", 
        destination: "Destination/Service",
        message: "Your Message",
        submit: "Send Message"
      },
      info: {
        phone: {
          title: "Phone & WhatsApp",
          value: "+62 812-3456-7890",
          desc: "Contact us anytime"
        },
        email: {
          title: "Email",
          value: "info@sulawesicarrental.com",
          desc: "Response within 1 hour"
        },
        location: {
          title: "Location",
          value: "Makassar, South Sulawesi",
          desc: "Pickup available in Makassar"
        },
        hours: {
          title: "Operating Hours",
          value: "24/7",
          desc: "Ready to serve anytime"
        }
      },
      whatsapp: "Chat WhatsApp"
    }
  };

  const t = content[language];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-soft bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                {language === 'id' ? 'Formulir Kontak' : 'Contact Form'}
              </CardTitle>
              <CardDescription>
                {language === 'id' 
                  ? 'Isi formulir ini untuk mendapatkan penawaran terbaik'
                  : 'Fill this form to get the best offer'
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder={t.form.name} />
              <Input type="email" placeholder={t.form.email} />
              <Input placeholder={t.form.phone} />
              <Input placeholder={t.form.destination} />
              <Textarea 
                placeholder={t.form.message} 
                className="min-h-24"
              />
              <Button 
                className="w-full bg-gradient-ocean hover:shadow-medium transition-smooth"
                size="lg"
              >
                {t.form.submit}
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp CTA */}
            <Card className="border-0 shadow-soft bg-gradient-sunset text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{t.whatsapp}</h3>
                    <p className="text-white/90">
                      {language === 'id' 
                        ? 'Respon cepat & booking langsung'
                        : 'Quick response & direct booking'
                      }
                    </p>
                  </div>
                  <Button 
                    variant="secondary"
                    className="bg-white text-secondary hover:bg-white/90"
                  >
                    Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-soft bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold text-primary mb-1">{t.info.phone.title}</h3>
                  <p className="font-medium">{t.info.phone.value}</p>
                  <p className="text-sm text-muted-foreground">{t.info.phone.desc}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold text-primary mb-1">{t.info.email.title}</h3>
                  <p className="font-medium text-sm">{t.info.email.value}</p>
                  <p className="text-sm text-muted-foreground">{t.info.email.desc}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold text-primary mb-1">{t.info.location.title}</h3>
                  <p className="font-medium">{t.info.location.value}</p>
                  <p className="text-sm text-muted-foreground">{t.info.location.desc}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold text-primary mb-1">{t.info.hours.title}</h3>
                  <p className="font-medium">{t.info.hours.value}</p>
                  <p className="text-sm text-muted-foreground">{t.info.hours.desc}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;