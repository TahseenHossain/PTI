import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Popular from "./Popular";
import { Link, useLocation } from "react-router-dom";

const Populars = () => {
  const [populars, setPopulars] = useState([]);
  const [swiper, setSwiper] = useState(null);  
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10");
        const data = await response.json();
        const popularItems = data.Items.filter((item) => item.IsPopular === true);

        setPopulars((prevPopulars) => {
            if (location.state && location.state.newItem && location.state.updateComponent === 'Populars'){
            return [...prevPopulars, location.state.newItem, ...popularItems];
          }
          return [...prevPopulars, ...popularItems];
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location.state]);

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Popular</h3>
        <div className="flex items-center space-x-2">
          <Link to="/addPopular" className="text-2xl font-bold text-[#FFAA33]">AddMore</Link>
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
        {populars.map((popular) => (
          <SwiperSlide key={popular.Id}>
            <Popular popular={popular} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Populars;
