// Import Style File
import "./hero_section.scss";

// Import Components
import Button from "../../common/button/Button";
import Progress from "../../common/Progress";

// Import Link
import { Link } from "react-router-dom";

// Import Custom Hooks
import { useFetch } from "../../../hooks/useFetch";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function HeroSection() {
  const { data, isLoading } = useFetch("data.json");

  return (
    <div className="hero-section">
      {isLoading ? (
        <Progress height="400px" />
      ) : (
        <>
          {data ? (
            <>
              <Swiper
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2000,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                {data.banners.map((item) => {
                  return (
                    <SwiperSlide className="slide" key={item.id}>
                      <div
                        className="box"
                        style={{
                          backgroundImage: `url(${item.img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="cover">
                          <p className="discount-date">{item.discountDate}</p>

                          <p className="title">{item.title}</p>

                          <p className="description">{item.description}</p>

                          <div className="price">
                            <p className="new-price">
                              $
                              {(
                                item.price -
                                item.price * (item.discount / 100)
                              ).toFixed(2)}
                              <span className="old-price">${item.price}</span>
                            </p>
                          </div>

                          <Link to="/shop">
                            <Button btnTitle="Shop Now" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}

export default HeroSection;
