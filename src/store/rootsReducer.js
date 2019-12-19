import { ACTION_TYPES } from './actions';

const initialState = {
  restaurantsListData: null,
  restaurantListInfo: null,
  isLoading: false,
  error: null,
  search: '',
};

export function rootsReducer(state = initialState, action) {
  switch (action.type) {

    case ACTION_TYPES.SAVE_SEARCH: {
      const { payload } = action;
      return {
        ...state,
        search: payload,
      };
    }

    case ACTION_TYPES.SAVE_RESTAURANT: {
      const { payload } = action;
      return {
        ...state,
        error: null,
        restaurantListInfo: payload,
      };
    }

    case ACTION_TYPES.SAVE_RESTAURANTS: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        restaurantsListData: payload,
      };
    }

    case ACTION_TYPES.SET_LOAD_RESTAURANTS_ERROR: {
      const { payload } = action;

      return {
        ...state,
        error: payload,
        restaurantsListData: null,
      };
    }

    case ACTION_TYPES.START_LOADING: {

      return {
        ...state,
        isLoading: true,
      };
    }

    case ACTION_TYPES.STOP_LOADING: {

      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
}
