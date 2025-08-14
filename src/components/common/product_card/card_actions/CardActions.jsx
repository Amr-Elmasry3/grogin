// Import Ui
import CardActionsUi from "./CardActionsUi";

// Import Custom Hooks
import { useAddProduct } from "../../../../hooks/useAddProduct";
import { useRemoveProduct } from "../../../../hooks/useRemoveProduct";
import { useCheckProduct } from "../../../../hooks/useCheckProduct";

function CardActions({ product }) {
  const addProduct = useAddProduct();
  const removeProduct = useRemoveProduct();
  const checkProduct = useCheckProduct();

  return (
    <CardActionsUi
      product={product}
      checkProduct={checkProduct}
      addProduct={addProduct}
      removeProduct={removeProduct}
    />
  );
}

export default CardActions;
