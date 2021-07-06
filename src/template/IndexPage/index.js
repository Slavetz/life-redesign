import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'

import cn from 'classnames';
import s from './styles.module.scss';
import PostPrewiev from 'components/PostPrewiev';
import NewsC2 from 'components/NewsBlocks/NewsC2';
import Rassledovaniya from 'components/NewsBlocks/Rassledovaniya';
import EdChoise from 'components/NewsBlocks/EdChoise';
import Wow from 'components/NewsBlocks/Wow';
import Dich from 'components/NewsBlocks/Dich';

import { useGlobalState } from 'context/globalContext';
import NewsB2 from 'components/NewsBlocks/NewsB2';
import HeaderSwiper from 'components/HeaderSwiper';

export default function Index(props) {
  const { data } = props;
  const { mwVerTablet } = useGlobalState();

  if (!data) return null;

  return (
    <div className={s.app}>
      <div className={s.fakeTopAd} />
      <div className={s.fakeHeader} />
      <div className={s.app_content_wrapper}>
        <HeaderSwiper data={data.Categories} />
        <NewsB2 data={data.B2} />
      </div>
      <div className={cn(s.main_grid, s.app_content_wrapper)}>
        <div className={s.content}>
          <div className={cn(s.item_B1, s.fullWidthMobile)}>
            <PostPrewiev data={data.B1} type="fullwidthCard" />
          </div>

          {mwVerTablet && (
            <>
              <div className={cn(s.item_C2, s.fullWidthMobile)}>
                <NewsC2 data={data.C2} />
              </div>
              <div className={cn(s.item_C1, s.fullWidthMobile)}>
                <PostPrewiev type="fullwidthCard" data={data.C1} />
              </div>
            </>
          )}

          {data.AA.map((post) => (
            <PostPrewiev key={`NewsAA-${post._id}`} type="simple" data={post} />
          ))}

          <Rassledovaniya data={data.Rassledovaniya} />
          <EdChoise data={data.EdChoise} />
          <Wow data={data.Wow} />
          <Dich data={data.Dich} />
        </div>

        {!mwVerTablet && (
          <div className={s.aside}>
            <div className={cn(s.item_C1)}>
              <PostPrewiev type="smallCard" data={data.C1} />
            </div>
            <div className={cn(s.item_C2)}>
              <NewsC2 data={data.C2} />
            </div>
            <div className={cn(s.fakeAsideAd)} />
            <div className={cn(s.fakeAsideAd, s.fakeAsideAdFixed)} />
          </div>
        )}
      </div>
      <div className={s.fakeFooter} />
    </div>
  );
}
