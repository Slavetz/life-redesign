import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'hooks/useMediaQuery';
import scssVar from 'styles/variables.module.scss';

const UIStateContext = React.createContext();
const UIDispatchContext = React.createContext();

const initialValues = {};

function UIReducer(state, action) {
  return { ...state, [action.type]: action.payload };
}

function GlobalProvider({ children, forcedProps }) {
  const [state, dispatch] = React.useReducer(UIReducer, {
    ...initialValues,
    ...forcedProps,
  });
  return (
    <UIStateContext.Provider value={state}>
      <UIDispatchContext.Provider value={dispatch}>{children}</UIDispatchContext.Provider>
    </UIStateContext.Provider>
  );
}

function useGlobalState() {
  const context = React.useContext(UIStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a CountProvider');
  }

  const [screenType, setScreenType] = useState();

  const mvHorTablet = useMediaQuery(`(max-width: ${scssVar.horTablet})`);
  const mwVerTablet = useMediaQuery(`(max-width: ${scssVar.verTablet})`);
  const mvMobile = useMediaQuery(`(max-width: ${scssVar.mobile})`);

  useEffect(() => {
    switch (true) {
      case mvMobile:
        setScreenType('mobile');
        break;
      case mwVerTablet:
        setScreenType('ver-tablet');
        break;
      case mvHorTablet:
        setScreenType('hor-tablet');
        break;
      default:
        setScreenType('desktop');
    }
  }, [mwVerTablet, mvHorTablet, mvMobile]);

  return {
    ...context,
    screenType,
    mvHorTablet,
    mwVerTablet,
    mvMobile,
  };
}

function useGlobalDispatch() {
  const context = React.useContext(UIDispatchContext);
  if (context === undefined) {
    throw new Error('useGlobalDispatch must be used within a CountProvider');
  }
  return context;
}

function useGlobalContext() {
  return [useGlobalState(), useGlobalDispatch()];
}

export { GlobalProvider, useGlobalState, useGlobalDispatch, useGlobalContext };
