import React from 'react';

import cn from 'classnames';
import s from './styles.module.scss';
import a from 'layouts/html/styles.module.scss';
import PostPrewiev from 'components/PostPrewiev';
import NewsC2 from 'blocks/IndexPage/NewsC2';
import Rassledovaniya from 'blocks/IndexPage/Rassledovaniya';
import EdChoise from 'blocks/IndexPage/EdChoise';
import Wow from 'blocks/IndexPage/Wow';
import Dich from 'blocks/IndexPage/Dich';

import RightTopAd from 'components/AdSlots/RightTopAd'
import RightBottomAd from 'components/AdSlots/RightBottomAd'

import { useScreenState } from 'context/GlobalContext';
import NewsB2 from 'blocks/IndexPage/NewsB2';
import HeaderSwiper from 'blocks/IndexPage/HeaderSwiper';

export default function Index(props) {
  const { data } = props;
  const { mwVerTablet } = useScreenState();

  if (!data) return null;

  return (
    <>
        <div className={a.app_content_wrapper}>
            <HeaderSwiper data={data.Categories} />
            <NewsB2 data={data.B2} />
        </div>
        <div className={cn(s.main_grid, a.app_content_wrapper)}>
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
                    <div className={cn(s.fakeAsideAd)}>
                        <RightTopAd />
                    </div>
                    <div className={cn(s.fakeAsideAd, s.fakeAsideAdFixed)}>
                        <RightBottomAd />
                    </div>
                </div>
            )}
        </div>
    </>
  );
}
