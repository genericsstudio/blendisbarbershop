import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Scissors, CirclePlus, Slice, Calendar } from "lucide-react";
import PageHeader from "@/components/ui/header";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Services & Preise",
  description:
    "Unsere Services bei Blendis Barbershop Flawil: Haarschnitt, Bartpflege, Haar- & Bartschnitt. Transparente Preise, professionelle Qualität.",
};


export default function ServicesPage() {

  const services = [
    {
      title: "Erwachsene",
      description:
        "Professioneller Haarschnitt für Erwachsene und Jugendliche ab 16 Jahren.",
      prices: [
        { label: "Haarschnitt", ageGroup: "", price: "CHF 30" },
        { label: "Bartschnitt", ageGroup: "", price: "CHF 20" },
        { label: "Haar- und Bartschnitt", ageGroup: "", price: "CHF 40" },
        { label: "Haar- und Bartschnitt mit Bartfärben", ageGroup: "", price: "CHF 60" },
      ],
    },
    {
      title: "Kinder",
      description:
        "Professioneller Haarschnitt für Kinder unter 16 Jahren.",
      prices: [
        { label: "Haarschnitt", ageGroup: "", price: "CHF 25" },
      ],
    },
  ];





  return (
    <div className="min-h-screen bg-background mt-32">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <PageHeader
          title="Unsere Services und Preise"
          description="Entdecke unsere vielfältigen Dienstleistungen und Preise"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <Card
              key={service.title}
              className="transition-shadow"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {idx === 0 && <Scissors className="h-5 w-5" />}
                  {idx === 1 && <Slice className="h-5 w-5" />}
                  {idx === 2 && <CirclePlus className="h-5 w-5" />}
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {service.description}
                </CardDescription>
                <Table>
                  <TableBody>
                    {service.prices.map((price, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">
                          {price.label}
                        </TableCell>
                        {"ageGroup" in price ? (
                          <>
                            <TableCell className="text-right text-muted-foreground text-xs">
                              {price.ageGroup}
                            </TableCell>
                            <TableCell className="text-right text-muted-foreground">
                              {price.price}
                            </TableCell>
                          </>
                        ) : (
                          <TableCell className="text-right text-muted-foreground"></TableCell>
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}

          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Online Termin buchen
              </CardTitle>
              <CardDescription>
                Buche deinen Termin ganz einfach online über unseren Kalender.
              </CardDescription>
              <CardDescription>
                Probleme? Ruf uns an unter 076 423 33 22
              </CardDescription>
            </CardHeader>
            <CardContent>
              <iframe
                src="https://app.cal.eu/blendis-barbershop/"
                width="100%"
                height="700"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
