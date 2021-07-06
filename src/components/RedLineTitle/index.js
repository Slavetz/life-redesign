import React from 'react';
import cx from 'classnames';

import s from './styles.module.scss';

const RedLineTitle = ({ className, title }) => (
  <div className={cx(s.root, className)}>
    <span className={s.line} />
    <div className={s.title}>{title}</div>
  </div>
);

export default RedLineTitle;
