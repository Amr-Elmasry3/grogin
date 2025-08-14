// Import Ui
import OtherLinksUi from "./OtherLinksUi";

// Import Hooks
import { useState } from "react";

// Import Custom Hooks
import { useFetch } from "../../../../hooks/useFetch";

function OtherLinks() {
  const [linksState, setLinksState] = useState([
    { id: 1, title: "Home", link: "/", active: true },
    { id: 2, title: "Shop", link: "/shop", active: false },
    { id: 3, title: "Blogs", link: "/blogs", active: false },
    { id: 4, title: "Contact Us", link: "/contact-us", active: false },
  ]);

  const [products, setProducts] = useState(null);
  const [trendingProducts, setTrendingProducts] = useState(false);
  const [almostProducts, setAlmostProdcuts] = useState(false);

  const { data, isLoading } = useFetch("data.json");

  const handleLinksState = (id) => {
    const newLinksState = { ...linksState };

    newLinksState.map((item) => {
      return item.id === id ? (item.active = true) : (item.active = false);
    });

    setLinksState(newLinksState);
  };

  const handleTrendingPro = (value) => {
    setTrendingProducts(value);

    if (value) {
      setProducts(data ? data.products.slice(120, 126) : null);
    }
  };

  const handleAlmostPro = (value) => {
    setAlmostProdcuts(value);

    if (value) {
      setProducts(data ? data.products.slice(160, 166) : null);
    }
  };

  return (
    <>
      <OtherLinksUi
        links={linksState}
        handleLinksState={handleLinksState}
        products={products}
        isLoading={isLoading}
        trending={trendingProducts}
        handleTrendingPro={handleTrendingPro}
        almost={almostProducts}
        handleAlmostPro={handleAlmostPro}
      />
    </>
  );
}

export default OtherLinks;
