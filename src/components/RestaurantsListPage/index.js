import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadRestaurants, loadRestaurant } from '../../store/actions';
import {
  selectRestaurantsList,
  selectRestaurantsListError,
  selectIsLoading,
  selectRestaurantListInfo,
} from '../../store/selectors';

function mapState2Props(state) {
  return {
    restaurantsData: selectRestaurantsList(state),
    error: selectRestaurantsListError(state),
    isLoading: selectIsLoading(state),
    restaurantListInfo :selectRestaurantListInfo(state),
  };
}

const mapDispatch2Props = {
  loadRestaurants,
  loadRestaurant,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(RestaurantsListPage);

export { Enhanced as RestaurantsListPage };
