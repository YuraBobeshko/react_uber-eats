import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectRestaurantsList = createSelector(
  rootSelector,
  ({ restaurantsListData }) => {
    if (!restaurantsListData) {
      return [];
    }

    const { feedItems, storesMap } = restaurantsListData;

    return feedItems.map(({ uuid }) => storesMap[uuid]);
  },
);

export const selectSearch = createSelector(
  rootSelector,
  ({search}) => search
);

export const selectRestaurantListInfo = createSelector(
  rootSelector,
  ({ restaurantListInfo }) => restaurantListInfo
);

export const selectRestaurantsListError = createSelector(
  rootSelector,
  ({ error }) => error
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);
