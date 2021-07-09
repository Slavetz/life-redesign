import React from 'react';
import cn from 'classnames';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import s from './styles.module.scss';
import PostPrewiev from 'components/PostPrewiev';
import { useScreenState } from 'context/ScreenState';

export default function NewsC2({ data = [] }) {
  const { mwVerTablet } = useScreenState();

  const Main = !mwVerTablet ? data.Main : data.Main.slice(0, 4);
  const Last = !mwVerTablet ? data.Last : data.Last.slice(0, 4);

  return (
    <div className={cn(s.root)}>
      <Tabs>
        <TabList>
          <Tab>ПОСЛЕДНИЕ</Tab>
          <Tab>ГЛАВНЫЕ НОВОСТИ</Tab>
        </TabList>

        <TabPanel>
          {Main.map((post) => (
            <PostPrewiev
              className={cn(s.inline)}
              titleClassName={cn(s.title)}
              key={`NewsC2-T1-${post._id}`}
              data={post}
              type="inline"
            />
          ))}{' '}
          <div className={s.showAll}>Посмотреть все</div>
        </TabPanel>
        <TabPanel>
          {Last.map((post) => (
            <PostPrewiev
              className={cn(s.inline)}
              titleClassName={cn(s.title)}
              key={`NewsC2-T2-${post._id}`}
              data={post}
              type="inline"
            />
          ))}{' '}
          <div className={s.showAll}>Посмотреть все</div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
