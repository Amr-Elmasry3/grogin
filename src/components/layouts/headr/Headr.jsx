// Import Components
import TimerHeadr from "./timer_headr/TimerHeadr";
import QuickLinks from "./quick_links/QuickLinks";
import LogoSection from "./logo_section/LogoSection";
import OtherLinks from "./other_links/OtherLinks";

function Headr() {
  return (
    <div className="headr">
      <TimerHeadr />

      <QuickLinks />

      <LogoSection />

      <OtherLinks />
    </div>
  );
}

export default Headr;
