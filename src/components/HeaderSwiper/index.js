import cn from 'classnames';

import React, { useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

// import Swiper core and required modules
import SwiperCore, { Scrollbar, Mousewheel } from 'swiper/core';

import s from './styles.module.scss';

// install Swiper modules
SwiperCore.use([Scrollbar, Mousewheel]);

export default function HeaderSwiper({ data }) {
  const swiperEl = useRef(null);

  useEffect(() => {
    const swiperApi = swiperEl.current.swiper;
    setTimeout(() => {
      swiperApi.update();
    }, 0);
  }, []);

  return (
    <Swiper
      ref={swiperEl}
      direction="horizontal"
      slidesPerView="auto"
      freeMode
      mousewheel
      className={cn(s.root)}
      spaceBetween={32}
    >
      {data.map((item) => (
        <SwiperSlide key={`HeaderSwiper-${item._id}`}>
          <p>{item.title}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
