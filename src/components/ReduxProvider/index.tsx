import React, {createContext} from 'react';
import {Actions, InitState} from '../../store/type';
import dashboardReducer from '../../store/dashboardReducer';
import {initState} from '../../store/initState';
import buyTabReducer from '../../store/buyTabReducer';

const mainReducer: React.Reducer<InitState, Actions> = (
  {dashboardState, buyTabState},
  action,
) => ({
  dashboardState: dashboardReducer(dashboardState, action),
  buyTabState: buyTabReducer(buyTabState, action),
});

const ReduxContext = createContext<{
  state: InitState;
  dispatch: React.Dispatch<Actions>;
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
