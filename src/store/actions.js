export const ACTION_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
  SET_LOAD_RESTAURANTS_ERROR: 'SET_LOAD_RESTAURANTS_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  SAVE_RESTAURANT: 'SAVE_RESTAURANT',
  SAVE_SEARCH: 'SAVE_SEARCH',
};

const saveRestaurants = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANTS,
  payload: data,
});

const setRestaurantsError = error => ({
  type: ACTION_TYPES.SET_LOAD_RESTAURANTS_ERROR,
  payload: error,
});

const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTION_TYPES.STOP_LOADING,
});

const saveRestaurant = data => ({
  type: ACTION_TYPES.SAVE_RESTAURANT,
  payload: data,
});

export const saveSearch = data => ({
  type: ACTION_TYPES.SAVE_SEARCH,
  payload: data,
});

export const loadRestaurants = () => (dispatch) => {
  dispatch(startLoading());

  fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants')
    .then(res => res.json())
    .then(({ data }) => {
      dispatch(saveRestaurants(data));
    })
    .catch(error => dispatch(setRestaurantsError(error.message)))
    .finally(() => dispatch(stopLoading()));
};

export const loadRestaurant = (data) => (dispatch) => {
  fetch(`https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/${data}`)
    .then(res => res.json())
    .then(({ data }) => {
      dispatch(saveRestaurant(data));
    })
    .catch(error => dispatch(setRestaurantsError(error.message)))
};

