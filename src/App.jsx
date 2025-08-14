import { Routes, Route } from "react-router-dom";
// Import React
import React, { Suspense } from "react";

// Import Import Layouts
import Headr from "./components/layouts/headr/Headr";
import Footer from "./components/layouts/footer/Footer";
const Sidebar = React.lazy(() =>
  import("./components/layouts/sidebar/Sidebar")
);
const CartSidebar = React.lazy(() =>
  import("./components/layouts/cart_sidebar/CartSidebar")
);
import ScrollUp from "./components/layouts/scroll_up/ScrollUp";
import Loader from "./components/layouts/loader/Loader";
const Toastify = React.lazy(() => import("./components/layouts/Toastify"));
const LoginModel = React.lazy(() =>
  import("./components/layouts/login_model/LoginModel")
);

// Import Pages
const Home = React.lazy(() => import("./pages/home_page/Home"));
const Shop = React.lazy(() => import("./pages/shop_page/shop"));
const ProductDetails = React.lazy(() =>
  import("./pages/product_details/ProductDetails")
);
const AboutUs = React.lazy(() => import("./pages/about_page/AboutUs"));
const LoginAndRegister = React.lazy(() =>
  import("./pages/login_register/LoginAndRegister")
);
const Cart = React.lazy(() => import("./pages/cart_page/Cart"));
const Wishlist = React.lazy(() => import("./pages/wishlist_page/Wishlist"));
const Compare = React.lazy(() => import("./pages/compare_page/Compare"));
const Checkout = React.lazy(() => import("./pages/checkout_page/Checkout"));
const UserAccount = React.lazy(() =>
  import("./pages/user_account/UserAccount")
);
const ContactUs = React.lazy(() => import("./pages/contact_us_page/ContactUs"));
const Blogs = React.lazy(() => import("./pages/blogs_page/Blogs"));
const BlogDetails = React.lazy(() =>
  import("./pages/blog_details_page/BlogDetails")
);

// Import Hooks
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <StyledEngineProvider injectFirst>
      <div className="app">
        <Suspense>
          <Toastify />
        </Suspense>

        <Suspense>
          <Sidebar />
        </Suspense>

        <Suspense>
          <CartSidebar />
        </Suspense>

        <ScrollUp />

        <Suspense>
          <LoginModel />
        </Suspense>

        <Headr />

        <div className="content" style={{ padding: "30px 0 0" }}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/shop" element={<Shop />} />

              <Route path="/product-details/:id" element={<ProductDetails />} />

              <Route path="/about-us" element={<AboutUs />} />

              <Route path="/login-register" element={<LoginAndRegister />} />

              <Route path="/user-account" element={<UserAccount />} />

              <Route path="/blogs" element={<Blogs />} />

              <Route path="/blog-details/:id" element={<BlogDetails />} />

              <Route path="/contact-us" element={<ContactUs />} />

              <Route path="/cart" element={<Cart />} />

              <Route path="/compare" element={<Compare />} />

              <Route path="/wishlist" element={<Wishlist />} />

              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Suspense>
        </div>

        <Footer />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
