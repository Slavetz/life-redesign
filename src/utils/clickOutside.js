import { useEffect } from 'react';

const clickOutside = (ref, cb) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      cb();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default clickOutside;
