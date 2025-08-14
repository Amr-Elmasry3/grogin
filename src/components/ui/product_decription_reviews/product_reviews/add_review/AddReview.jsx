// Import Ui
import AddReviewUi from "./AddReviewUi";

// Import React Icons
import { FaStar } from "react-icons/fa";

// Import Hooks
import { useState } from "react";
import { IoMdThermometer } from "react-icons/io";

function AddReview() {
  const [rateState, setRateState] = useState([
    { id: 1, rate: 1, star: [<FaStar className="icon" />], active: false },
    {
      id: 2,
      rate: 2,
      star: [<FaStar className="icon" />, <FaStar className="icon" />],
      active: false,
    },
    {
      id: 3,
      rate: 3,
      star: [
        <FaStar className="icon" />,
        <FaStar className="icon" />,
        <FaStar className="icon" />,
      ],
      active: false,
    },
    {
      id: 4,
      rate: 4,
      star: [
        <FaStar className="icon" />,
        <FaStar className="icon" />,
        <FaStar className="icon" />,
        <FaStar className="icon" />,
      ],
      active: false,
    },
    {
      id: 5,
      rate: 5,
      star: [
        <FaStar className="icon" />,
        <FaStar className="icon" />,
        <FaStar className="icon" />,
        <FaStar className="icon" />,
        <FaStar className="icon" />,
      ],
      active: true,
    },
  ]);

  const handleRateState = (id) => {
    const newRateState = [...rateState];

    newRateState.map((item) => {
      return item.id === id ? (item.active = true) : (item.active = false);
    });

    setRateState(newRateState);
  };

  return <AddReviewUi rate={rateState} handleRateState={handleRateState} />;
}

export default AddReview;
