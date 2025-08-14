// Import Style File
import "../../sass/global/blogs.scss";

// Import Components
import BlogDetailsContent from "../../components/ui/blog_details_content/BlogDetailsContent";
import BlogsSidebar from "../../components/ui/blogs_sidebar/BlogsSidebar";

// Import Hooks
import { useEffect } from "react";
import { useParams } from "react-router";

// Import Redux Hooks
import { useDispatch } from "react-redux";

// Import Blogs Slice Reducers
import { setId } from "../../features/blogsSlice";

function BlogDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setId(id));
  }, [id, dispatch]);

  return (
    <div className="blog-details-page">
      <div className="container">
        <BlogDetailsContent id={id} />

        <BlogsSidebar />
      </div>
    </div>
  );
}

export default BlogDetails;
