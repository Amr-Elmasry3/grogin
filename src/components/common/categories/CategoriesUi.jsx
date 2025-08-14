// Import Style File
import "./categories.scss";

// Import React Icons
import { BsGrid } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

// Import Matrial Ui Components
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

// Import Link
import { Link } from "react-router-dom";

function CategoriesUi({
  data,
  isLoading,
  handleCategories,
  handleSearchCategory,
}) {
  return (
    <div className="categories">
      <Accordion
        className="accordion"
        defaultExpanded={
          document.documentElement.clientWidth > 1115 &&
          window.location.pathname === "/grogin/"
            ? true
            : false
        }
      >
        <AccordionSummary
          expandIcon={<MdKeyboardArrowDown className="icon arrow" />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="accordion-summary"
        >
          <BsGrid className="icon grid" />

          <span>All Categories</span>
        </AccordionSummary>

        <AccordionDetails className="accordion-details">
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <>
              {data ? (
                <>
                  {data.map((item) => {
                    return (
                      <div className="box" key={item.id}>
                        {item.subCategories ? (
                          <div>
                            <div
                              className="category"
                              onClick={() => {
                                handleCategories(item.id);
                              }}
                              onMouseEnter={() => {
                                handleCategories(item.id);
                              }}
                              onMouseLeave={() => {
                                handleCategories(item.id);
                              }}
                            >
                              <img src={item.img} alt="..." />

                              <Link
                                to="/shop"
                                onClick={() =>
                                  handleSearchCategory(
                                    item.id,
                                    "main",
                                    item.category
                                  )
                                }
                              >
                                {item.category}
                              </Link>

                              <MdKeyboardArrowRight className="icon" />
                            </div>

                            <ul
                              className={`sub-categories ${
                                item.active ? "active" : ""
                              }`}
                              onMouseEnter={() => {
                                handleCategories(item.id);
                              }}
                              onMouseLeave={() => {
                                handleCategories(item.id);
                              }}
                            >
                              {item.subCategories.map((sub) => {
                                return (
                                  <Link
                                    to="/shop"
                                    className="sub-category"
                                    key={sub.id}
                                    onClick={() =>
                                      handleSearchCategory(
                                        item.id,
                                        "sub",
                                        sub.subCate
                                      )
                                    }
                                  >
                                    {sub.subCate}
                                  </Link>
                                );
                              })}
                            </ul>
                          </div>
                        ) : (
                          <Link
                            to="/shop"
                            className="category"
                            onClick={() =>
                              handleSearchCategory(
                                item.id,
                                "main",
                                item.category
                              )
                            }
                          >
                            <img src={item.img} alt="..." />
                            {item.category}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </>
              ) : (
                ""
              )}
            </>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CategoriesUi;
