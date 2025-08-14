// Import Components
import HeroSection from "../../components/ui/hero_section/HeroSection";
import Services from "../../components/ui/services/Services";
import PromoSection from "../../components/common/promo_section/PromoSection";
import NewArrivals from "../../components/ui/new_arrivals/NewArrivals";
import FeaturedProducts from "../../components/ui/featured_products/FeaturedProducts";
import BestSellers from "../../components/ui/best_sellers/BestSellers";
import Banner from "../../components/ui/banner/Banner";
import PopularCompanies from "../../components/ui/popular_companies/PopularCompanies";

import ErrorBoundary from "../../components/error_boundary/ErrorBoundary";

function Home() {
  return (
    <div className="home-page">
      <div className="container">
        <ErrorBoundary>
          <HeroSection />
        </ErrorBoundary>

        <Services />

        <PromoSection start={0} end={3} style="three" />

        <ErrorBoundary>
          <NewArrivals url="data.json" />
        </ErrorBoundary>

        <PromoSection start={3} end={7} style="four" />

        <ErrorBoundary>
          <FeaturedProducts url="data.json" />
        </ErrorBoundary>

        <ErrorBoundary>
          <BestSellers url="data.json" />
        </ErrorBoundary>

        <PromoSection start={8} end={10} style="two" />

        <Banner />

        <PopularCompanies />
      </div>
    </div>
  );
}

export default Home;
