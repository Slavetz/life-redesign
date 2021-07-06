import cn from 'classnames';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

// import Swiper core and required modules
import SwiperCore, { Scrollbar, Mousewheel } from 'swiper/core';

import { useGlobalState } from 'context/globalContext';
import PostPrewiev from 'components/PostPrewiev';

import s from './styles.module.scss';

// install Swiper modules
SwiperCore.use([Scrollbar, Mousewheel]);

function slidesCount(screenType) {
  switch (screenType) {
    case 'mobile':
      return 1.2;
    case 'ver-tablet':
      return 2;
    case 'hor-tablet':
      return 2;
    default:
      return 3;
  }
}

export default function NewsSwiper({ data }) {
  const { screenType } = useGlobalState();
  return (
    <Swiper
      direction="horizontal"
      slidesPerView={slidesCount(screenType)}
      freeMode
      scrollbar
      mousewheel
      className={cn(s.root)}
      spaceBetween={16}
    >
      {data.map((post) => (
        <SwiperSlide key={`NewsSwiper-${post._id}`}>
          <PostPrewiev data={post} type="simple" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
