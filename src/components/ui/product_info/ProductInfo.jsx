// Import Ui
import ProductInfoUi from "./ProductInfoUi";

// Import Hooks
import { useState } from "react";

// Import Custom Hooks
import { useFetch } from "../../../hooks/useFetch";
import { useAddProduct } from "../../../hooks/useAddProduct";
import { useRemoveProduct } from "../../../hooks/useRemoveProduct";
import { useCheckProduct } from "../../../hooks/useCheckProduct";
import { useDecreaseProductCount } from "../../../hooks/useDecreaseProductCount";
import { useIncreaseProductCount } from "../../../hooks/useIncreaseProductCount";

function ProductInfo({ id }) {
  const { data, isLoading } = useFetch("data.json");

  const [quntity, setQuntity] = useState(1);

  const [mainImg, setMainImg] = useState("");

  const addProduct = useAddProduct();
  const removeProduct = useRemoveProduct();
  const checkProduct = useCheckProduct();
  const decreaseCount = useDecreaseProductCount();
  const increaseCount = useIncreaseProductCount();

  const handleMainImg = (src) => {
    setMainImg(src);
  };

  const handleQuntity = (action, item) => {
    if (action === "add") {
      setQuntity(quntity + 1);
      increaseCount(item);
    } else if (action === "subtract") {
      if (quntity > 1) {
        setQuntity(quntity - 1);
      }

      decreaseCount(item);
    }
  };

  return (
    <>
      <ProductInfoUi
        product={data ? data.products[id - 1] : null}
        isLoading={isLoading}
        mainImg={mainImg}
        handleMainImg={handleMainImg}
        addProduct={addProduct}
        removeProduct={removeProduct}
        checkProduct={checkProduct}
        quntity={quntity}
        handleQuntity={handleQuntity}
      />
    </>
  );
}

export default ProductInfo;
