import { useMediaQuery } from 'hooks/useMediaQuery';
import scssVar from 'styles/variables.module.scss';
import { useEffect, useState } from 'react';
import { ScreenInitVals } from '../ScreenState';

function useScreenSizes() {
  const mvHorTablet = useMediaQuery(`(max-width: ${scssVar.horTablet})`);
  const mwVerTablet = useMediaQuery(`(max-width: ${scssVar.verTablet})`);
  const mvMobile = useMediaQuery(`(max-width: ${scssVar.mobile})`);

  const [ScreenState, setScreenState] = useState(ScreenInitVals.Screen);

  useEffect(() => {
    const data = {
      mvHorTablet,
      mwVerTablet,
      mvMobile,
      isMobile: false,
      isVerTablet: false,
      isHorTablet: false,
      isDesktop: false,
    };

    switch (true) {
      case mvMobile:
        data.isMobile = true;
        break;
      case mwVerTablet:
        data.isVerTablet = true;
        break;
      case mvHorTablet:
        data.isHorTablet = true;
        break;
      default:
        data.isDesktop = true;
    }

    setScreenState(data);
  }, [mwVerTablet, mvHorTablet, mvMobile]);

  return ScreenState;
}

export { useScreenSizes };
