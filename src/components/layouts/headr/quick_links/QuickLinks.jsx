// Import Ui
import QuickLinksUi from "./QuickLinksUi";

// Import Hooks
import { useState } from "react";

function QuickLinks() {
  const [languages, setLangauges] = useState({
    langNow: "English",
    data: [
      { id: 1, lang: "English", active: true },
      { id: 2, lang: "Arabic", active: false },
      { id: 3, lang: "Spanish", active: false },
      { id: 4, lang: "Germany", active: false },
    ],
    openList: false,
  });

  const [currency, setCurrency] = useState({
    currNow: "USD",
    data: [
      { id: 1, curr: "USD", active: true },
      { id: 2, curr: "INR", active: false },
      { id: 3, curr: "GBP", active: false },
      { id: 4, curr: "URA", active: false },
    ],
    openList: false,
  });

  const handleLanguage = (id, value) => {
    if (id && value) {
      const newLanguages = { ...languages };

      newLanguages.langNow = newLanguages.data[id - 1].lang;

      newLanguages.data.map((item) => {
        return item.id === id ? (item.active = true) : (item.active = false);
      });

      newLanguages.openList = !newLanguages.openList;

      setLangauges(newLanguages);
    } else {
      setLangauges({ ...languages, openList: !languages.openList });
    }
  };

  const handleCurrency = (id, value) => {
    if (id && value) {
      const newCurrency = { ...currency };

      newCurrency.currNow = newCurrency.data[id - 1].curr;

      newCurrency.data.map((item) => {
        return item.id === id ? (item.active = true) : (item.active = false);
      });

      newCurrency.openList = !newCurrency.openList;

      setCurrency(newCurrency);
    } else {
      setCurrency({ ...currency, openList: !currency.openList });
    }
  };

  return (
    <>
      <QuickLinksUi
        languages={languages}
        handleLanguage={handleLanguage}
        currency={currency}
        handleCurrency={handleCurrency}
      />
    </>
  );
}

export default QuickLinks;
