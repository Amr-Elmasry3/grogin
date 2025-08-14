// Import memo
import { memo } from "react";

// Import Ui
import SearchUi from "./SearchUi";

// Import Hooks
import { useState } from "react";
import { useNavigate } from "react-router";

// Import Custom Hooks
import { useFetch } from "../../../hooks/useFetch";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Functions
import { LowerCaseFirstLetter } from "../../../utils/LowerCaseFirstLetter";
import { CapitalizeFirstLetter } from "../../../utils/CapitalizeFirstLetter";

// Import Search Slice Reducers
import {
  setSearchValue,
  handleResultsBox,
} from "../../../features/searchSlice";

function Search({ closeSidebar }) {
  const { data, isLoading } = useFetch("data.json");

  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const isOpen = useSelector((store) => {
    return store.search.resultsIsOpen;
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchValue = (value) => {
    setInputValue(value);
    dispatch(setSearchValue(value));
  };

  const handleSearchResults = (value) => {
    if (value && !isLoading && data) {
      const results = data.products.filter(
        (product) =>
          product.name.startsWith(CapitalizeFirstLetter(value)) ||
          product.name.startsWith(LowerCaseFirstLetter(value))
      );

      setSearchResults(results);
    }
  };

  const handleOpen = (value) => {
    dispatch(handleResultsBox(value));
  };

  const handleClickSearch = () => {
    if (inputValue) {
      handleOpen();
      navigate("/shop");

      closeSidebar ? closeSidebar() : null;
    }
  };

  return (
    <>
      <SearchUi
        searchValue={inputValue}
        handleSearchValue={handleSearchValue}
        searchResults={searchResults}
        handleSearchResults={handleSearchResults}
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleClickSearch={handleClickSearch}
      />
    </>
  );
}

export default memo(Search);
