import React, {useEffect, useState} from 'react';

import { UIActions, UIInitVals, UI_ACTIONS } from './UI'
import { UserActions, UserInitVals, USER_ACTIONS } from './User'
import { MainActions, MainInitVals, MAIN_ACTIONS } from './Main'
import { useScreenSizes, ScreenSizesInitVals } from "./useScreenSizes";

const ContextState = React.createContext();
const DispatchContext = React.createContext();

const initialValues = {
    UI: UIInitVals,
    User: UserInitVals,
    Main: MainInitVals,
    Screen: ScreenSizesInitVals,
};

const actions = {
    UI: UIActions,
    User: UserActions,
    Main: MainActions,
    Screen: (store, action) => {
        const { value } = action;
        return {...store, ...value}
    }
}


function ContextReducer(state, action) {
    console.log('GlobalContext action:', action);

    const { type } = action;

    const store = actions[type](state[type], action);

    return {...state, [type]: {...store}};
}

function GlobalContextProvider({children, forcedProps}) {
    const [state, dispatch] = React.useReducer(ContextReducer, {
        ...initialValues,
        ...forcedProps,
    });

    const screen = useScreenSizes();
    useEffect(()=>{
        dispatch({type: 'Screen', action: 'Update Screen State', value: screen });
    },[screen])

    return (
        <ContextState.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </ContextState.Provider>
    );
}

function dispatchGlobalContext() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const context = React.useContext(DispatchContext);
    if (context === undefined) {
        throw new Error('dispatchGlobalContext must be used within a GlobalContextProvider');
    }
    return context;
}

function useMainStore() {
    const context = React.useContext(ContextState);
    if (context === undefined) {
        throw new Error('useMainState must be used within a GlobalContextProvider');
    }
    const { Main } = context;
    return {
        ...main,
    };
}

function useUIStore() {
    const context = React.useContext(ContextState);
    if (context === undefined) {
        throw new Error('useUIState must be used within a GlobalContextProvider');
    }
    const { UI } = context;
    return {
        ...UI,
    };
}

function useUserStore() {
    const context = React.useContext(ContextState);
    if (context === undefined) {
        throw new Error('useUserState must be used within a GlobalContextProvider');
    }
    const { User } = context;
    return {
        ...User,
    };
}

function useScreenState() {
    const context = React.useContext(ContextState);
    if (context === undefined) {
        throw new Error('useScreenState must be used within a GlobalContextProvider');
    }
    const { Screen } = context;
    return {
        ...Screen,
    };
}

export { GlobalContextProvider, dispatchGlobalContext, useScreenState, useUserStore, useMainStore, useUIStore };
