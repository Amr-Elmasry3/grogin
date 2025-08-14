// Import Ui
import "../../sass/global/blogs.scss";

// Import Components
import BlogsContent from "../../components/ui/blogs_content/BlogsContent";
import BlogsSidebar from "../../components/ui/blogs_sidebar/BlogsSidebar";

function Blogs() {
  return (
    <div className="blogs-page">
      <div className="container">
        <BlogsContent />

        <BlogsSidebar />
      </div>
    </div>
  );
}

export default Blogs;
