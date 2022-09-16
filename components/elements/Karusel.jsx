// import Swiper core and required modules
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { SAppText, SAppName } from '.';
import styles from './Karusel.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Karusel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}

    >
      <SwiperSlide>
        <a href="https://enigmatic-sierra-06702.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <Image src="/DeKiRouter.png" alt="" height={400} width={700} className={ styles.Image }/>
            <SAppName className={ styles.title }>DeKi Router</SAppName>
        </a>
        <a href="https://github.com/Akiya-Kudo/TaskClear" className={ styles.gitLink } target="_blank" rel="noopener noreferrer">
            <Image src="/github-icon.png" alt="" height={20} width={20} className={ styles.gitIcon }/>
        </a>
        <SAppText>目標管理ツールを作ってみました。計画立てることが好きな方はぜひ使ってみて下さい。( PHP / Laravel )</SAppText>
        <br />
      </SwiperSlide>
      
      <SwiperSlide>
        <a href="https://github.com/Akiya-Kudo/pixabay-clone-app" target="_blank" rel="noopener noreferrer">
            <Image src="/pixabay.png" alt="" height={400} width={700} className={ styles.Image }/>
            <SAppName className={ styles.title }>Pixabay Clone App</SAppName>
        </a>
        <SAppText>無料画像サイトPixabayからAPIで画像を取得しています。( React / Pixabay API )</SAppText>
        <br />
      </SwiperSlide>
    </Swiper>
  );
}

export default Karusel