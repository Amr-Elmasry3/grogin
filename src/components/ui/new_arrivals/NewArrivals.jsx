// Import Style File
import "./new_arrivals.scss";

// Import Components
import MainHeading from "../../common/main_heading/MainHeading";
import ProductCard from "../../common/product_card/ProductCard";
import Progress from "../../common/Progress";

// Import Custom Hook
import { useFetch } from "../../../hooks/useFetch";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function NewArrivals({ url }) {
  const { data, isLoading } = useFetch(url);

  return (
    <div className="new-arrivals" style={{ margin: "0 0 30px" }}>
      <MainHeading
        title="New Arrivals"
        subTitle="Dont miss this opportunity at a special discount just for this week."
      />

      <div className="new-arrivals-content">
        <Swiper
          breakpoints={{
            1116: {
              slidesPerView: 6,
            },
            1029: {
              slidesPerView: 4,
            },
            991: {
              slidesPerView: 4,
            },
            766: {
              slidesPerView: 3,
            },
            590: {
              slidesPerView: 2,
            },
            475: {
              slidesPerView: 1,
            },
          }}
          navigation={isLoading ? false : true}
          modules={[Navigation]}
          className="mySwiper"
          style={{ border: isLoading ? "none" : null }}
        >
          {isLoading ? (
            <Progress height="350px" />
          ) : (
            <>
              {data ? (
                <>
                  {data.products.slice(0, 17).map((item) => {
                    return (
                      <SwiperSlide key={item.id} className="slide">
                        <ProductCard product={item} />
                      </SwiperSlide>
                    );
                  })}
                </>
              ) : (
                ""
              )}
            </>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default NewArrivals;
