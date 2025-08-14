// Import Components
import Progress from "../../../common/Progress";

function ProductDescription({ product, isLoading }) {
  return (
    <div className="product-description">
      {isLoading ? (
        <Progress height="200px" />
      ) : (
        <>
          {product ? (
            <>
              {product.description.map((item, index) => {
                return <p key={product.id + index}>{item}</p>;
              })}
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}

export default ProductDescription;
