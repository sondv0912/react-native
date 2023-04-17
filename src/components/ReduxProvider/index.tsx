import React, {createContext} from 'react';
import {ActionType, InitState} from '../../store/type';
import dashboardReducer from '../../store/dashboardReducer';
import {initState} from '../../store/initState';

const mainReducer: React.Reducer<InitState, ActionType> = (
  {dashboardState},
  action,
) => ({
  dashboardState: dashboardReducer(dashboardState, action),
});

const ReduxContext = createContext<{
  state: InitState;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initState,
  dispatch: () => null,
});

type Props = {
  children: React.ReactNode;
};

const ReduxProvider: React.FC<Props> = ({children}) => {
  const [state, dispatch] = React.useReducer(mainReducer, initState);

  return (
    <ReduxContext.Provider value={{state, dispatch}}>
      {children}
    </ReduxContext.Provider>
  );
};

export {ReduxContext, ReduxProvider};
