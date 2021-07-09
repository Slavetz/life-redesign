import React, { useEffect } from 'react';

import cn from 'classnames';
import l from 'layouts/html/styles.module.scss';
import PostPrewiev from 'components/PostPrewiev';
import NewsC2 from 'blocks/IndexPage/NewsC2';
import Rassledovaniya from 'blocks/IndexPage/Rassledovaniya';
import EdChoise from 'blocks/IndexPage/EdChoise';
import Wow from 'blocks/IndexPage/Wow';
import Dich from 'blocks/IndexPage/Dich';
import { useScreenState } from 'context/ScreenState';
import NewsB2 from 'blocks/IndexPage/NewsB2';
import HeaderSwiper from 'blocks/IndexPage/HeaderSwiper';
import RightAsideAds from 'blocks/RightAsideAds';
import s from './styles.module.scss';
import { useMainStore } from '../../context/MainStore';
import { ACTIONS, useDispatchUIStore, useUIStore } from '../../context/UIStore';

export default function Index() {
  const ScreenState = useScreenState();
  const { mwVerTablet } = ScreenState;

  const dispatch = useDispatchUIStore();
  const UIStore = useUIStore();
  const MainStore = useMainStore();

  useEffect(() => {
    console.log('> dispatch UIStore', new Date() - window._startDate, UIStore);
    dispatch({
      action: ACTIONS.CHANGE_EXPERIMENTS,
      value: {
        experiments: {
          geo: false,
        },
      },
    });
  }, []);

  useEffect(() => {
    console.log('> useEffect UIStore', new Date() - window._startDate, UIStore);
  }, [UIStore]);

  useEffect(() => {
    console.log('> useEffect ScreenState', new Date() - window._startDate, ScreenState);
  }, [ScreenState]);

  useEffect(() => {
    console.log('> useEffect ScreenState', new Date() - window._startDate, MainStore);
  }, [MainStore]);

  return (
    <>
      <div className={l.app_content_wrapper}>
        <HeaderSwiper data={MainStore.Categories} />
        <NewsB2 data={MainStore.B2} />
      </div>
      <div className={cn(s.main_grid, l.app_content_wrapper)}>
        <div className={s.content}>
          <div className={cn(s.item_B1, s.fullWidthMobile)}>
            <PostPrewiev data={MainStore.B1} type="fullwidthCard" />
          </div>

          {mwVerTablet && (
            <>
              <div className={cn(s.item_C2, s.fullWidthMobile)}>
                <NewsC2 data={MainStore.C2} />
              </div>
              <div className={cn(s.item_C1, s.fullWidthMobile)}>
                <PostPrewiev type="fullwidthCard" data={MainStore.C1} />
              </div>
            </>
          )}

          {MainStore.AA.map((post) => (
            <PostPrewiev key={`NewsAA-${post._id}`} type="simple" data={post} />
          ))}

          <Rassledovaniya data={MainStore.Rassledovaniya} />
          <EdChoise data={MainStore.EdChoise} />
          <Wow data={MainStore.Wow} />
          <Dich data={MainStore.Dich} />
        </div>

        {!mwVerTablet && (
          <div className={s.aside}>
            <div className={cn(s.item_C1)}>
              <PostPrewiev type="smallCard" data={MainStore.C1} />
            </div>
            <div className={cn(s.item_C2)}>
              <NewsC2 data={MainStore.C2} />
            </div>
            <RightAsideAds />
          </div>
        )}
      </div>
    </>
  );
}
