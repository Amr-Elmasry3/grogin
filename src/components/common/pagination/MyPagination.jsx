// Import Style File
import "./pagination.scss";

// Import Matrial Ui Components
import Pagination from "@mui/material/Pagination";

function MyPagination({ count, func, page }) {
  return (
    <div className="my-pagination">
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={func}
        page={page}
      />
    </div>
  );
}

export default MyPagination;
