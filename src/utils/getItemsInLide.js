const getItemsInSlide = ({ isLaptopBP, isLandscapeBP, isPortraitBP, isMobileBP }) => {
  if (isLaptopBP || isLandscapeBP || isPortraitBP) return 2;
  if (isMobileBP) return 1.1;
  return 3;
};

export default getItemsInSlide;
