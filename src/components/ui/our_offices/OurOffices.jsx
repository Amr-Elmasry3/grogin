// Import Style File
import "./our_offices.scss";

// Import React Icons
import { GrLocation } from "react-icons/gr";

function OurOffices() {
  return (
    <div className="our-offices">
      <div className="heading">
        <h2 className="title">Our Offices</h2>

        <p className="description">
          On dekande mydurtad mora även om skurkstat. Semirade timaheten rena.
          Radiogen pasam inte loba även om prerade i garanterad traditionell
          specialitet till bebel. Ev is sönde. Tun gps-väst att epiligt. Diliga
          tresk dira. Ens biov dijevis.
        </p>
      </div>

      <div className="our-offices-details">
        <div className="box">
          <div className="country">
            <GrLocation className="icon" />

            <span>United States</span>
          </div>

          <div className="details">
            <h3 className="office-name">United States Office</h3>

            <p className="location">205 Middle Road, 2nd Floor, New York</p>

            <span className="phone">+02 1234 567 88</span>

            <span className="email">info@example.com</span>
          </div>
        </div>

        <div className="box">
          <div className="country">
            <GrLocation className="icon" />

            <span>Munich</span>
          </div>

          <div className="details">
            <h3 className="office-name">Munich States Office</h3>

            <p className="location">205 Middle Road, 2nd Floor, Munich</p>

            <span className="phone">+5 456 123 22</span>

            <span className="email">contact@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurOffices;
