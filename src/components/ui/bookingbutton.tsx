

import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
export default function BookingButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min",  });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Button asChild
    variant="secondary"
    className="rounded-full hover:cursor-pointer">
      <a
        href="https://app.cal.eu/blendis-barbershop/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Termin Buchen
      </a>
    </Button>
  );
}
