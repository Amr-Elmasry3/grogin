// Import Components
import React from "react";
import Button from "../../../../common/button/Button";

function AddReviewUi({ rate, handleRateState }) {
  return (
    <div className="add-review">
      <h2 className="title">Add a review</h2>

      <form>
        <div className="choose-rate">
          <label>
            Your rate <span>*</span>
          </label>

          <div className="stars-box">
            {rate.map((item) => {
              return (
                <div
                  className={`box ${item.active ? "active" : ""}`}
                  key={item.id}
                  onClick={() => {
                    handleRateState(item.id);
                  }}
                >
                  {item.star.map((star, index) => {
                    return (
                      <React.Fragment key={item.id + index}>
                        {star}
                      </React.Fragment>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className="set-review">
          <label>
            Your review <span>*</span>
          </label>

          <textarea required></textarea>
        </div>

        <Button btnTitle="Submit" />
      </form>
    </div>
  );
}

export default AddReviewUi;
