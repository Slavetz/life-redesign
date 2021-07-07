const UI_ACTIONS = {
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


function UIActions( store, {action, value} ) {
    switch (action) {
        case UI_ACTIONS.SWITCH_THEME: {
            localStorage.setItem('theme', String(store.theme === 'light'));
            return { ...store, theme: store.theme === 'light' ? 'dark': 'light' };
        }
        case UI_ACTIONS.TOGGLE_FULLSCREEN: {
            return { ...store, isFullscreen: !store.isFullscreen };
        }
        case UI_ACTIONS.SHOW_FULLSCREEN: {
            return { ...store, isFullscreen: true };
        }
        case UI_ACTIONS.HIDE_FULLSCREEN: {
            return { ...store, isFullscreen: false };
        }
        case UI_ACTIONS.TOGGLE_PUSH_MODAL: {
            return { ...store, isOpenPushModal: !store.isOpenPushModal };
        }
        case UI_ACTIONS.SHOW_PUSH_MODAL: {
            return { ...store, isOpenPushModal: true };
        }
        case UI_ACTIONS.HIDE_PUSH_MODAL: {
            return { ...store, isOpenPushModal: false };
        }
        case UI_ACTIONS.TOGGLE_LOGIN_MODAL: {
            return { ...store, isOpenLoginModal: !store.isOpenLoginModal };
        }
        case UI_ACTIONS.TOGGLE_REGION_MODAL: {
            return { ...store, isOpenRegionModal: !store.isOpenRegionModal };
        }
        case UI_ACTIONS.TOGGLE_REGION_POPOVER: {
            return { ...store, isOpenRegionPopover: !store.isOpenRegionPopover };
        }
        case UI_ACTIONS.TOGGLE_SEARCH: {
            return { ...store, isOpenSearch: !store.isOpenSearch };
        }
        case UI_ACTIONS.TOGGLE_MENU: {
            // global._isOpenMenu = !store.isOpenMenu;
            return { ...store, isOpenMenu: !store.isOpenMenu };
        }
        case UI_ACTIONS.TOGGLE_FOOTER: {
            // global._isOpenFooter = !store.isOpenFooter;
            return { ...store, isOpenFooter: !store.isOpenFooter };
        }

        case UI_ACTIONS.SWITCH_ON_NONBRANDING_POST: {
            return { ...store, isNonBrand: true };
        }

        case UI_ACTIONS.SWITCH_OFF_NONBRANDING_POST: {
            return { ...store, isNonBrand: false };
        }
        case UI_ACTIONS.SWITCH_SUBSCRIBE: {
            return { ...store, isSubscribed: !store.isSubscribed };
        }
        case UI_ACTIONS.CHANGE_REGION: {
            return { ...store, region: value };
        }
        case UI_ACTIONS.CHANGE_EXPERIMENTS: {
            return { ...store, experiments: value };
        }
        default: {
            throw new Error(`Unhandled action key: ${key}`);
        }
    }
}

const UIInitVals = {
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
};

export { UIActions, UIInitVals, UI_ACTIONS }