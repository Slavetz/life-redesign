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

export default function NewsB2({ data }) {
  return (
    <Swiper
      direction="horizontal"
      slidesPerView="auto"
      freeMode
      mousewheel
      className={cn(s.root)}
      spaceBetween={31}
      breakpoints={{
        1280: {
          slidesPerView: 5,
        },
      }}
    >
      {data.map((post) => (
        <SwiperSlide key={`NewsB2-${post._id}`} className={cn(s.swiperSlide)}>
          <PostPrewiev className={cn(s.inline)} data={post} type="inline" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
