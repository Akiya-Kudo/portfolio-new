// import Swiper core and required modules
// import React, { useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Karusel = () => {

//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}

    //   onInit={(swiper) => {
    //     swiper.params.navigation.prevEl = prevRef.current;
    //     swiper.params.navigation.nextEl = nextRef.current;
    //     swiper.navigation.init();
    //     swiper.navigation.update();
    //   }}
    >
      <SwiperSlide><a href="https://enigmatic-sierra-06702.herokuapp.com"><Image src="/DeKiRouter.png" alt="" height={350} width={350}/></a></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      {/* <div ref={prevRef}>Prev</div>
      <div ref={nextRef}>Next</div> */}
    </Swiper>
  );
}

export default Karusel