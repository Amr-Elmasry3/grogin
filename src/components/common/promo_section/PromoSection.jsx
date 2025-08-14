// Import Style File
import "./promo_section.scss";

// Import Data
import { promos } from "../../../Data";

// Import Components
import Button from "../button/Button";

// Import Link
import { Link } from "react-router-dom";

function PromoSection({ start, end, style }) {
  return (
    <div className={`promo-section ${style ? style : ""}`}>
      {promos.slice(start, end).map((item) => {
        return (
          <div
            className="promo-card"
            key={item.id}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p className="date">{item.date}</p>

            <p className="title">{item.title}</p>

            <p className="sub-title">{item.subTitle}</p>

            <Link to="/shop">
              <Button btnTitle="Shop Now" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PromoSection;
