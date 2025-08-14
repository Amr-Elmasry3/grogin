// Import Style
import "./contact_us.scss";

// Import Components
import OurOffices from "../../components/ui/our_offices/OurOffices";
import ContactForm from "../../components/ui/contact_form/ContactForm";

function ContactUs() {
  return (
    <div className="contact-us-page">
      <div className="contact-heading">
        <span>contact width us</span>

        <h1 className="title">You can ask us questions</h1>

        <p className="description">
          Contact us for all your questions and opinions, or you can solve your
          problems in a shorter time with our contact offices.
        </p>
      </div>

      <div className="container">
        <OurOffices />

        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
