import {initStore} from "./ContextProvider";

const ScreenInitVals = {
    'Screen': {
        mvHorTablet: false,
        mwVerTablet: false,
        mvMobile: false,
        isMobile: false,
        isVerTablet: false,
        isHorTablet: false,
        isDesktop: true,
    }
};

const useScreenState = initStore('Screen')

export {useScreenState, ScreenInitVals}