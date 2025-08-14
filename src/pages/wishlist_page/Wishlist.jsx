// Import Style File
import "../../sass/global/table.scss";

// Import Components
import CloseIcon from "../../components/common/close_icon/CloseIcon";
import Button from "../../components/common/button/Button.jsx";
import EmptyBox from "../../components/common/empty_box/EmptyBox";

// Import Custom Hooks
import { useRemoveProduct } from "../../hooks/useRemoveProduct";
import { useAddProduct } from "../../hooks/useAddProduct";
import { useCheckProduct } from "../../hooks/useCheckProduct.js";

// Import Matrial Ui Components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Import Redux Hooks
import { useSelector } from "react-redux";

function Wishlist() {
  const products = useSelector((store) => {
    return store.wishlist.products;
  });

  const removeProduct = useRemoveProduct();
  const addProduct = useAddProduct();
  const checkProduct = useCheckProduct();

  return (
    <div className="wishlist-page">
      <div className="container">
        {[...products].length ? (
          <TableContainer component={Paper} className="table-container">
            <Table
              sx={{ minWidth: 950 }}
              aria-label="simple table"
              className="table"
            >
              <TableHead className="table-head">
                <TableRow className="table-row">
                  <TableCell align="center" className="table-cell">
                    Image
                  </TableCell>

                  <TableCell align="center" className="table-cell">
                    Category / Name
                  </TableCell>

                  <TableCell align="center" className="table-cell">
                    Price
                  </TableCell>

                  <TableCell align="center" className="table-cell">
                    Stock Status
                  </TableCell>

                  <TableCell align="center" className="table-cell">
                    Action
                  </TableCell>

                  <TableCell align="center" className="table-cell">
                    Remove
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody className="table-body">
                {products.map((item) => {
                  return (
                    <TableRow key={item.id} className="table-row">
                      <TableCell align="center" className="table-cell">
                        <div className="product-img">
                          <img src={item.images[0]} alt={`img${item.id}...`} />
                        </div>
                      </TableCell>

                      <TableCell align="center" className=" table-cell">
                        <span className="category">{item.category.main}</span>

                        <span className="title">{item.name}</span>
                      </TableCell>

                      <TableCell align="center" className="table-cell">
                        <span className="price">
                          $
                          {(
                            item.price -
                            item.price * (item.discount / 100)
                          ).toFixed(2)}
                        </span>
                      </TableCell>

                      <TableCell align="center" className="table-cell">
                        <span className="stock">{item.stock}</span>
                      </TableCell>

                      <TableCell align="center" className="table-cell">
                        <Button
                          btnTitle={`${
                            checkProduct(item.id, "cart")
                              ? "Remove From Cart"
                              : "Add To Cart"
                          }`}
                          func={() => {
                            if (checkProduct(item.id, "cart")) {
                              removeProduct(item, "cart");
                            } else {
                              addProduct(item, "cart");
                            }
                          }}
                        />
                      </TableCell>

                      <TableCell align="center" className="table-cell">
                        <CloseIcon
                          func={() => {
                            removeProduct(item, "wishlist");
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <EmptyBox page="wishlist" />
        )}
      </div>
    </div>
  );
}

export default Wishlist;
