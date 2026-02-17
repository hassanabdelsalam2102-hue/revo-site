import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { HighlightedButton } from "./Button";
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <div className="flex flex-col items-center justify-center gap-4 p-6 border rounded-2xl border-slate-200/30 bg-cta-from/10">
    <div>
        <h1 className="mb-2 text-lg font-bold">Schedule a Demo Call</h1>
        <p>   Pick a time that works for you and let’s talk about your goals, challenges,
        and how we can help you scale.</p>
    </div>
    <HighlightedButton className='justify-center' data-cal-namespace="30min"
        data-cal-link="nourhadidi/30min"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>
            Book a Slot!
    </HighlightedButton>
  </div>
};
