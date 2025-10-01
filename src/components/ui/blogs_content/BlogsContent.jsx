// Import Style file
import "./blogs_content.scss";

// Import Components
import Button from "../../common/button/Button";
import MyPagination from "../../common/pagination/MyPagination";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

import { handleDisplayDetails } from "../../../features/blogsSlice";

// Import Link
import { Link } from "react-router-dom";

function BlogsContent() {
  const blogs = useSelector((store) => {
    return store.blogs;
  });

  const dispatch = useDispatch();

  const handlePage = (event, page) => {
    dispatch(handleDisplayDetails(page));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="blogs-content">
      {blogs.data
        .slice(blogs.displayDetails.to - 1, blogs.displayDetails.from)
        .map((item) => {
          return (
            <div className="blog-box" key={item.id}>
              <img src={item.img} alt={`img${item.id}...`} loading="lazy" />

              <Link to={`/blog-details/${item.id}`} className="title">
                {item.title}
              </Link>

              <p className="date">{item.date}</p>

              <p className="blog">{item.blog}</p>

              <Link to={`/blog-details/${item.id}`}>
                <Button btnTitle="Read More" />
              </Link>
            </div>
          );
        })}

      <MyPagination
        count={
          !blogs.data ? 0 : Math.ceil([...blogs.data].length / blogs.count)
        }
        func={handlePage}
        page={blogs.displayDetails.pageNum}
      />
    </div>
  );
}

export default BlogsContent;
