// Import Style File
import "./blogs_sidebar.scss";

// Import Components
import Sociallinks from "../../common/social-links/Sociallinks";

// Import Redux Hooks
import { useSelector } from "react-redux";

// Import Link
import { Link } from "react-router-dom";

function BlogsSidebar() {
  const blogs = useSelector((store) => {
    return store.blogs.data;
  });

  return (
    <div className="blogs-sidebar">
      <div className="blogs-list">
        <h5 className="title">Blog Post List</h5>

        <div className="blogs-list-content">
          {blogs.map((item) => {
            return (
              <div className="box" key={item.id}>
                <img src={item.img} alt={`img${item.id}...`} />

                <div className="details">
                  <Link to={`/blog-details/${item.id}`}>{item.title}</Link>

                  <span className="date">{item.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="social-media">
        <h5 className="title">Social Media Widget</h5>

        <div className="social-media-content">
          <Sociallinks />
        </div>
      </div>
    </div>
  );
}

export default BlogsSidebar;
