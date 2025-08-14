// Import Style File
import "./place_delivery.scss";

// Import Components
import MyInput from "../my_input/MyInput";
import CloseIcon from "../close_icon/CloseIcon";

// Import React icons
import { GrLocation } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";

function PlaceDeliveryUi({
  searchValue,
  handleSearchValue,
  location,
  handleLocation,
}) {
  return (
    <div className="place-delivery">
      <div
        className="head"
        onClick={() => {
          handleLocation();
        }}
      >
        <GrLocation className="icon" />

        <p className="location">
          Deliver to<span>Alaska</span>
        </p>
      </div>

      <div
        className={`place-delivery-box ${location.openList ? "open" : null}`}
      >
        <div className="box">
          <CloseIcon func={handleLocation} />

          <h3 className="title">Delivery to you</h3>

          <p className="description">
            Add an exact address, a convenient pick-up point or a parcel locker
            to see the conditions for delivery of goods in advances.
          </p>

          <div className="search">
            <IoSearchSharp className="icon" />

            <MyInput
              type="text"
              value={searchValue}
              name="searchValue"
              placholder="Search your location..."
              handleChange={handleSearchValue}
            />
          </div>

          {[...location.filterData].length ? (
            <ul className="list">
              {location.filterData.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => {
                      handleLocation(item.id, item.loc);
                    }}
                  >
                    <GrLocation className="icon" />

                    <div className="location-box">
                      <span className="loc">{item.loc}</span>

                      <p>{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default PlaceDeliveryUi;
