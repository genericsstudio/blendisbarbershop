

import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
export default function BookingButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <Button
      className="rounded-full hover:cursor-pointer"
      data-cal-namespace="30min"
      data-cal-link="arlind-gurgurovci-8av36q/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      Termin Buchen
    </Button>
  );
}
