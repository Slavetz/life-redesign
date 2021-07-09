import { initStore, initDispatch } from './ContextProvider';

const ACTIONS = {};

function actionHandler(store, { action, value }) {
  switch (action) {
    default: {
      throw new Error(`Unhandled action key: ${action}`);
    }
  }
}

const initVals = {};
