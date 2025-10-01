// Import Style File
import "../../../sass/global/table.scss";

// Import Components
import CloseIcon from "../../../components/common/close_icon/CloseIcon";
import EmptyBox from "../../../components/common/empty_box/EmptyBox";

// Import Matrial Ui Components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Import React Icons
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

// Import Custom Hooks
import { useRemoveProduct } from "../../../hooks/useRemoveProduct";
import { useDecreaseProductCount } from "../../../hooks/useDecreaseProductCount";
import { useIncreaseProductCount } from "../../../hooks/useIncreaseProductCount";

function CartTable({ products }) {
  const removeProduct = useRemoveProduct();
  const decreaseCount = useDecreaseProductCount();
  const increaseCount = useIncreaseProductCount();

  return (
    <div className="cart-table">
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
                  Quntity
                </TableCell>

                <TableCell align="center" className="table-cell">
                  Total
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
                        <img
                          src={item.images[0]}
                          alt={`img${item.id}...`}
                          loading="lazy"
                        />
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
                      <div className="quntity">
                        <div
                          className="decrease-icon"
                          onClick={() => {
                            decreaseCount(item);
                          }}
                        >
                          <FaMinus className="icon" />
                        </div>

                        <span className="count">{item.count}</span>

                        <div
                          className="increase-icon"
                          onClick={() => {
                            increaseCount(item);
                          }}
                        >
                          <FaPlus className="icon" />
                        </div>
                      </div>
                    </TableCell>

                    <TableCell align="center" className="table-cell">
                      <span className="total">
                        $
                        {(
                          item.count *
                          (item.price - item.price * (item.discount / 100))
                        ).toFixed(2)}
                      </span>
                    </TableCell>

                    <TableCell align="center" className="table-cell">
                      <CloseIcon
                        func={() => {
                          removeProduct(item, "cart");
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
        <EmptyBox page="cart" />
      )}
    </div>
  );
}

export default CartTable;
