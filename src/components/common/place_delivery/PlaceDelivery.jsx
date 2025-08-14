// Import memo
import { memo } from "react";

// Import Ui
import PlaceDeliveryUi from "./PlaceDeliveryUi";

// Import Hooks
import { useState, useEffect } from "react";

// Import Custom Funtions
import { CapitalizeFirstLetter } from "../../../utils/CapitalizeFirstLetter";
import { LowerCaseFirstLetter } from "../../../utils/LowerCaseFirstLetter";

function PlaceDelivery() {
  const [searchValue, setSearchValue] = useState("");
  const [location, setLocation] = useState({
    locNow: "Alaska",
    data: [
      { id: 1, loc: "Alaska", description: "348 Black Rock Tpke, CT 06825" },
      {
        id: 2,
        loc: "Alabama",
        description: "8915 Gerber Road, Sacramento, CA 95829",
      },
      { id: 3, loc: "Arizona", description: "348 Black Rock Tpke, CT 06825" },
      {
        id: 4,
        loc: "California",
        description: "8915 Gerber Road, Sacramento, CA 95829",
      },
      { id: 5, loc: "Colorado", description: "348 Black Rock Tpke, CT 06825" },
      {
        id: 6,
        loc: "Folrida",
        description: "8915 Gerber Road, Sacramento, CA 95829",
      },
      { id: 7, loc: "Georgia", description: "348 Black Rock Tpke, CT 06825" },
      {
        id: 8,
        loc: "Kansas",
        description: "8915 Gerber Road, Sacramento, CA 95829",
      },
      { id: 9, loc: "New York", description: "348 Black Rock Tpke, CT 06825" },
      {
        id: 10,
        loc: "Washington",
        description: "8915 Gerber Road, Sacramento, CA 95829",
      },
      {
        id: 11,
        loc: "Minnesota",
        description: "348 Black Rock Tpke, CT 06825",
      },
    ],
    filterData: [],
    openList: false,
  });

  useEffect(() => {
    if (!searchValue) {
      setLocation({ ...location, filterData: location.data });
      return;
    }

    const data = location.data.filter((item) => {
      return (
        item.loc.startsWith(CapitalizeFirstLetter(searchValue)) ||
        item.loc.startsWith(LowerCaseFirstLetter(searchValue))
      );
    });

    setLocation({ ...location, filterData: data });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const handleSearchValue = (value) => {
    setSearchValue(value);
  };

  const handleLocation = (id, value) => {
    if (id && value) {
      const newLocation = { ...location };

      newLocation.locNow = newLocation.data[id - 1].loc;

      newLocation.openList = !newLocation.openList;

      setLocation(newLocation);
    } else {
      setLocation({ ...location, openList: !location.openList });
    }
  };

  return (
    <>
      <PlaceDeliveryUi
        serachValue={searchValue}
        handleSearchValue={handleSearchValue}
        location={location}
        handleLocation={handleLocation}
      />
    </>
  );
}

export default memo(PlaceDelivery);
