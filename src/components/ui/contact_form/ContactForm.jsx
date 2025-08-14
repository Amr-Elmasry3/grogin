// Import Style file
import "./contact_form.scss";

// Import Matrail Ui Component
import Grid from "@mui/material/Grid";

// Import Components
import Button from "../../common/button/Button";

function ContactForm() {
  return (
    <div className="contact-form">
      <form>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="box">
              <label>
                Your name
                <span>*</span>
              </label>

              <input type="text" />
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <div className="box">
              <label>
                Your email
                <span>*</span>
              </label>

              <input type="email" />
            </div>
          </Grid>

          <Grid size={12}>
            <div className="box">
              <label>
                Subject
                <span>*</span>
              </label>

              <input type="text" />
            </div>
          </Grid>

          <Grid size={12}>
            <div className="box">
              <label>
                Your message
                <span>*</span>
              </label>

              <textarea />
            </div>
          </Grid>
        </Grid>

        <Button btnTitle="Send Message" />
      </form>
    </div>
  );
}

export default ContactForm;
