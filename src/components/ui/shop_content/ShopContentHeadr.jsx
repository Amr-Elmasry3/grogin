// Import React
import React from "react";

// Import React Icons
import { MdKeyboardArrowDown } from "react-icons/md";

function ShopContentHeadr({
  style,
  handleGridStyle,
  sort,
  handleSortState,
  shop,
}) {
  return (
    <div className="shop-content-headr">
      <p>
        Showing <span className="to">{shop.displayDetails.to}</span>to
        <span className="from">{shop.displayDetails.from}</span>
        of
        <span className="total">{shop.displayDetails.total}</span>results
      </p>

      <div className="sort">
        <div
          className="sort-head"
          onClick={() => {
            handleSortState();
          }}
        >
          <span>Sort: </span>

          <p className="value">
            {sort.sortNow ? sort.sortNow : "none"}{" "}
            <MdKeyboardArrowDown className="icon" />{" "}
          </p>
        </div>

        <ul className={`sort-list ${sort.isOpen ? "open" : ""}`}>
          {sort.data.map((item) => {
            return (
              <li
                className={`${item.active ? "active" : ""}`}
                key={item.id}
                onClick={() => {
                  handleSortState(item.id);
                }}
              >
                {item.type} by {item.sort}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="style">
        {style.map((item) => {
          return (
            <div
              className={`box ${item.style} ${item.active ? "active" : ""}`}
              key={item.id}
              onClick={() => {
                handleGridStyle(item.id);
              }}
            >
              {item.grid.map((span, index) => {
                return (
                  <React.Fragment key={index}>
                    <span key={index}>{span}</span>
                  </React.Fragment>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopContentHeadr;
