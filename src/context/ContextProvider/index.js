import React, {useEffect, useReducer, useState} from 'react';

import {useScreenSizes} from "./useScreenSizes";
import {compareObjects} from "./functions";

const ContextState = React.createContext();
const DispatchContext = React.createContext();

function ContextReducer(state, action) {
    console.log('ContextReducer', new Date - window._startDate, action);
    const {store, value} = action;
    return {...state, [store]: {...value}};
}

function ContextProvider({children, forcedProps}) {

    const [state, dispatch] = React.useReducer(ContextReducer, {
        ...forcedProps,
    });

    const screen = useScreenSizes();
    useEffect(() => {
        // console.log('###compareObjects', 'Screen', compareObjects(state,state.Screen))
        if (compareObjects(screen, state.Screen)) return;
        dispatch({store: 'Screen', value: screen});
    }, [screen])

    return (
        <ContextState.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </ContextState.Provider>
    );
}


// function useContext() {
//     const context = React.useContext(ContextState);
//
//     if (context === undefined) {
//         throw new Error('initStore > useStore > useContext hook must be used within a ContextProvider');
//     }
//
//     return {...context};
// }

function useStore() {
    const { store } = this;
    const context = React.useContext(ContextState);

    if (context === undefined) {
        throw new Error('initStore > useStore hook must be used within a ContextProvider');
    }
    const contextStore = {...context[store]};

    const [stateStore, setStateStore] = useState(contextStore)

    useEffect(()=>{
        // console.log('### compare', store, compareObjects(stateStore, contextStore))
        if (compareObjects(stateStore, contextStore)) return;
        setStateStore(contextStore);
    },[context])

    // toDO следить поменялся ли contextStore

    return stateStore;
}

function initStore(store) {
    if (!store) {
        throw new Error('initStore must be used with param: store[string]');
    }
    return useStore.bind({store})
}


// function useContextDispatcher() {
//     const context = React.useContext(DispatchContext);
//     if (context === undefined) {
//         throw new Error('initDispatch > useStoreDispatcher > useContextDispatcher hook must be used within a ContextProvider');
//     }
//     return context;
// }

function useStoreDispatcher() {

    const { store, handler } = this

    const context = React.useContext(ContextState);
    if (context === undefined) {
        throw new Error('initDispatch > useStoreDispatcher > useContextDispatcher hook must be used within a ContextProvider');
    }

    // const contextDispatcher = useContextDispatcher();
    const contextDispatcher = React.useContext(DispatchContext);

    const [state, dispatch] = useReducer(handler, {...context[store]});
    const [init, setInit] = useState(true);

    useEffect(() => {
        if (!state) return
        if (init) return setInit(false);
        contextDispatcher({store , value: state});
        dispatch(null)
    }, [state])

    return dispatch;
}

function initDispatch(store,handler) {
    if (!store || !handler) {
        throw new Error('initDispatch must be used with params: store[string], handler[function]');
    }
    return useStoreDispatcher.bind({store,handler})
}

export {ContextProvider, initDispatch, initStore};
