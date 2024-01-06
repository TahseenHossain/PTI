import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";  
import { useEffect, useState } from "react";
import Popular from "./Popular";

const Recommended = () => {
  const [recommendeds, setRecommendeds] = useState([]);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
      .then((res) => res.json())
      .then((data) => {
        const recommendedItems = data.Items.filter(
          (item) => item.IsRecommended === true
        );
        setRecommendeds(recommendedItems);
      });
  }, []);

  return (
    <div className="my-10">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Recommended</h3>
        <div className="flex items-center space-x-2">
          <h3 className="text-2xl font-bold text-[#FFAA33]">AddMore</h3>
          <button
            onClick={() => swiper && swiper.slidePrev()}  
            className="btn btn-circle"
          >
            ❮
          </button>
          <button
            onClick={() => swiper && swiper.slideNext()}  
            className="btn btn-circle"
          >
            ❯
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]} 
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);  
        }}
      >
        {recommendeds.map((popular) => (
          <SwiperSlide key={popular.Id}>
            <Popular popular={popular} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommended;
