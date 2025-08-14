// Import Ui
import TopFooterUi from "./TopFooterUi";

// Import Hooks
import { useState } from "react";

function TopFooter() {
  const [emailValue, setEmailValue] = useState("");

  const handleEmailValue = (value) => {
    setEmailValue(value);
  };

  return (
    <>
      <TopFooterUi emailValue={emailValue} handleEmailValue={handleEmailValue} />
    </>
  );
}

export default TopFooter;
