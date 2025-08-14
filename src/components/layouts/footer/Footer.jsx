// Import Components
import TopFooter from "./top_footer/TopFooter";
import BodyFooter from "./body_footer/BodyFooter";
import BottomFooter from "./bottom_footer/BottomFooter";

function Footer() {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "#e9ecef",
        padding: "30px 0",
        margin: "70px 0 0",
      }}
    >
      <TopFooter />

      <BodyFooter />

      <BottomFooter />
    </div>
  );
}

export default Footer;
