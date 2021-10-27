import cn from 'classnames';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

// import Swiper core and required modules
import SwiperCore, { Scrollbar, Mousewheel } from 'swiper/core';

import PostPrewiev from 'components/PostPrewiev';

import s from './styles.module.scss';

// install Swiper modules
SwiperCore.use([Scrollbar, Mousewheel]);

export default function NewsSwiper({ data }) {
  return (
    <Swiper
      direction="horizontal"
      slidesPerView={1.2}
      freeMode
      scrollbar
      mousewheel
      className={cn(s.root)}
      spaceBetween={16}
      breakpoints={{
        1280: {
          slidesPerView: 3,
        },
        648: {
          slidesPerView: 2,
        },
      }}
    >
      {data.map((post) => (
        <SwiperSlide key={`NewsSwiper-${post._id}`}>
          <PostPrewiev data={post} type="simple" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
