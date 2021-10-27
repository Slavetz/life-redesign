import { initStore, initDispatch } from './ContextProvider';

const ACTIONS = {
  SWITCH_THEME: 'switchTheme',

  TOGGLE_PUSH_MODAL: 'togglePushModal',
  SHOW_PUSH_MODAL: 'showPushModal',
  HIDE_PUSH_MODAL: 'hidePushModal',
  TOGGLE_LOGIN_MODAL: 'toggleLoginModal',
  TOGGLE_REGION_MODAL: 'toggleRegionModal',
  TOGGLE_REGION_POPOVER: 'toggleRegionPopover',
  TOGGLE_SEARCH: 'toggleSearch',
  TOGGLE_MENU: 'toggleMenu',
  TOGGLE_FOOTER: 'toggleFooter',
  SWITCH_SUBSCRIBE: 'switchSubscribe',
  CHANGE_REGION: 'changeRegion',
  CHANGE_EXPERIMENTS: 'changeExperiments',

  TOGGLE_FULLSCREEN: 'toggleFullScreen',
  SHOW_FULLSCREEN: 'showFullScreen',
  HIDE_FULLSCREEN: 'hideFullScreen',

  SWITCH_ON_NONBRANDING_POST: 'switchOnNonBrandingPost',
  SWITCH_OFF_NONBRANDING_POST: 'switchOffNonBrandingPost',
};

function actionHandler(store, event) {
  if (!event) return null;
  const { action, value } = event;
  switch (action) {
    case ACTIONS.SWITCH_THEME: {
      localStorage.setItem('theme', String(store.theme === 'light'));
      return { ...store, theme: store.theme === 'light' ? 'dark' : 'light' };
    }
    case ACTIONS.TOGGLE_FULLSCREEN: {
      return { ...store, isFullscreen: !store.isFullscreen };
    }
    case ACTIONS.SHOW_FULLSCREEN: {
      return { ...store, isFullscreen: true };
    }
    case ACTIONS.HIDE_FULLSCREEN: {
      return { ...store, isFullscreen: false };
    }
    case ACTIONS.TOGGLE_PUSH_MODAL: {
      return { ...store, isOpenPushModal: !store.isOpenPushModal };
    }
    case ACTIONS.SHOW_PUSH_MODAL: {
      return { ...store, isOpenPushModal: true };
    }
    case ACTIONS.HIDE_PUSH_MODAL: {
      return { ...store, isOpenPushModal: false };
    }
    case ACTIONS.TOGGLE_LOGIN_MODAL: {
      return { ...store, isOpenLoginModal: !store.isOpenLoginModal };
    }
    case ACTIONS.TOGGLE_REGION_MODAL: {
      return { ...store, isOpenRegionModal: !store.isOpenRegionModal };
    }
    case ACTIONS.TOGGLE_REGION_POPOVER: {
      return { ...store, isOpenRegionPopover: !store.isOpenRegionPopover };
    }
    case ACTIONS.TOGGLE_SEARCH: {
      return { ...store, isOpenSearch: !store.isOpenSearch };
    }
    case ACTIONS.TOGGLE_MENU: {
      // global._isOpenMenu = !store.isOpenMenu;
      return { ...store, isOpenMenu: !store.isOpenMenu };
    }
    case ACTIONS.TOGGLE_FOOTER: {
      // global._isOpenFooter = !store.isOpenFooter;
      return { ...store, isOpenFooter: !store.isOpenFooter };
    }

    case ACTIONS.SWITCH_ON_NONBRANDING_POST: {
      return { ...store, isNonBrand: true };
    }

    case ACTIONS.SWITCH_OFF_NONBRANDING_POST: {
      return { ...store, isNonBrand: false };
    }
    case ACTIONS.SWITCH_SUBSCRIBE: {
      return { ...store, isSubscribed: !store.isSubscribed };
    }
    case ACTIONS.CHANGE_REGION: {
      return { ...store, region: value };
    }
    case ACTIONS.CHANGE_EXPERIMENTS: {
      return { ...store, experiments: value };
    }
    default: {
      throw new Error(`Unhandled action key: ${action}`);
    }
  }
}

const UIInitVals = {
  UI: {
    theme: 'light',
    isFullscreen: false,
    isOpenPushModal: false,
    isOpenLoginModal: false,
    isOpenRegionModal: false,
    isOpenRegionPopover: false,
    isOpenSearch: false,
    isOpenMenu: false,
    isOpenFooter: false,
    isNonBrand: false,
    isSubscribed: false,
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    region: null,
    experiments: {
      // geo: !!getCookie('region'),
    },
  },
};

const useUIStore = initStore('UI');
const useDispatchUIStore = initDispatch('UI', actionHandler);

export { useUIStore, useDispatchUIStore, ACTIONS, UIInitVals };
