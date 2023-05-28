import {BuyTabReducer, ActionType} from './type';

const buyTabReducer: BuyTabReducer = (state, action) => {
  switch (action.type) {
    case ActionType.UPDATE_HEROES_BUY_TAB:
      return {...state, banner: action.heroes};
    default:
      return state;
  }
};

export default buyTabReducer;
