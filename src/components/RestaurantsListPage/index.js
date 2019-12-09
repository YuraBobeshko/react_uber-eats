import { RestaurantsListPage } from './RestaurantsListPage';
import { connect } from 'react-redux';
import { loadRestaurants } from '../../store/actions'

function mapStateToProps(state) {
  return {
    restaurantsListData: state.restaurantsListData,
  };
};

const mapDispathToProps = {
  loadRestaurants,
}

const Enhanced = connect(
  mapStateToProps,
  mapDispathToProps
)(RestaurantsListPage)

export { Enhanced as RestaurantsListPage };
