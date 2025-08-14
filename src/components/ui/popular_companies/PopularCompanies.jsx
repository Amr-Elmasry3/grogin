// Import Style File
import "./popular_companies.scss";

// Import Data
import { companiesData } from "../../../Data";

// Import Components
import MainHeading from "../../common/main_heading/MainHeading";

// Import Matrial Ui Components
import Rating from "@mui/material/Rating";

// Import React Icons
import { GoPersonFill } from "react-icons/go";

// Import Link
import { Link } from "react-router-dom";

function PopularCompanies() {
  return (
    <div className="popular-companies">
      <MainHeading
        title="Popular Companies"
        subTitle="Some of the new products arriving this weeks"
      />

      <div className="popular-companies-content">
        {companiesData.map((item) => {
          return (
            <div className="box" key={item.id}>
              <div className="details-box">
                <div className="img-box">
                  <GoPersonFill className="icon" />
                </div>

                <div className="details">
                  <Link to="" className="name">
                    {item.company}
                  </Link>

                  <span className="badge">Featured</span>

                  <div className="rate">
                    <Rating
                      name="read-only"
                      value={item.rate}
                      readOnly
                      style={{ fontSize: "16px" }}
                    />

                    <span className="count">{item.count}</span>
                  </div>
                </div>
              </div>

              <p className="description">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularCompanies;
