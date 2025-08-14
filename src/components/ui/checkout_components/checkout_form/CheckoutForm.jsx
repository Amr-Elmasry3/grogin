// Import Style File
import "./checkout_form.scss";

// Import Components
import Button from "../../../common/button/Button";

// Import Matrail Ui Component
import Grid from "@mui/material/Grid";

function CheckoutForm() {
  return (
    <div className="checkout-form">
      <h2 className="title">Billing Details</h2>

      <form>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="box">
              <label>
                First name
                <span>*</span>
              </label>

              <input type="text" />
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <div className="box">
              <label>
                Last name
                <span>*</span>
              </label>

              <input type="text" />
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <div className="box">
              <label>
                Address
                <span>*</span>
              </label>

              <input type="text" />
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <div className="box">
              <label>
                Phone
                <span>*</span>
              </label>

              <input type="number" />
            </div>
          </Grid>

          <Grid size={12}>
            <div className="box">
              <label>
                Country
                <span>*</span>
              </label>

              <input type="text" />
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <div className="box">
              <label>
                City
                <span>*</span>
              </label>

              <input type="text" />
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <div className="box">
              <label>
                Street address
                <span>*</span>
              </label>

              <input type="text" />
            </div>
          </Grid>
        </Grid>

        <Button btnTitle="Place Order" />
      </form>
    </div>
  );
}

export default CheckoutForm;
