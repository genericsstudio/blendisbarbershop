import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Clock, Phone, Car, Bus, Instagram } from "lucide-react";
import PageHeader from "@/components/ui/header";

const metadata = {
  title: "Unser Standort und Öffnungszeiten - Blendis Barbershop",
  description: "Besuchen Sie uns an unserem zentralen Standort in Flawil.",
};

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-background mt-32">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <PageHeader
            title="Unser Standort und Öffnungszeiten"
            description="Besuchen Sie uns an unserem zentralen Standort"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Address & Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Addresse & Kontakt
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Unsere Adresse</h3>
                  <p className="text-muted-foreground">
                    Rösslistrasse 10
                    <br />
                    9230 Flawil
                  </p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href="tel:+41764233322">076 423 33 22</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="h-4 w-4 text-muted-foreground" />
                    <a href="https://www.instagram.com/blendisbarbershop">
                      blendisbarbershop
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Öffnungszeiten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Montag</span>
                    <Badge variant="outline">Geschlossen</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Dienstag</span>
                    <p className="text-xs text-muted-foreground">Ohne Termin</p>
                    <Badge variant="secondary" className="text-right">
                      10:00 - 12:00 <br /> 13:00 - 19:00
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Mittwoch</span>
                    <p className="text-xs text-muted-foreground">Ohne Termin</p>
                    <Badge variant="secondary" className="text-right">
                      10:00 - 12:00 <br /> 13:00 - 19:00
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Donnerstag</span>
                    <p className="text-xs text-muted-foreground">
                      Nur mit Termin
                    </p>
                    <Badge variant="secondary" className="text-right">
                      10:00 - 12:00 <br /> 13:00 - 19:00
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Freitag</span>
                    <p className="text-xs text-muted-foreground">
                      Nur mit Termin
                    </p>
                    <Badge variant="secondary" className="text-right">
                      10:00 - 12:00 <br /> 13:00 - 19:00
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Samstag</span>
                    <p className="text-xs text-muted-foreground">
                      Nur mit Termin
                    </p>
                    <Badge variant="secondary" className="text-right">
                      10:00 - 13:00 <br /> 14:00 - 17:00
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sonntag </span>
                    <Badge variant="outline">Geschlossen</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Terminhinweise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-muted-foreground">
                  <p>Dienstag und Mittwoch: Nur spontane Besuche möglich</p>
                  <p>
                    Donnerstag, Freitag und Samstag: Nur nach Terminvereinbarung
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <Card className="mt-8 overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Unser Standort
              </CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.8!2d9.1089!3d47.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b0b0b0b0b0b0b%3A0x0!2sR%C3%B6sslistrasse%2013%2C%209230%20Flawil%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </CardContent>
          </Card>

          {/* Transportation & Parking */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Parking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Entlang der Rösslistrasse stehen weisse Parkplätze mit
                    Parkmeter (kostenpflichtig) zur Verfügung.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bus className="h-5 w-5" />
                  Öffentliche Verkehrsmittel
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Vom Bahnhof Flawil erreichen Sie unseren Barbershop in nur 4
                    Minuten zu Fuss.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
