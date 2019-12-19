import { Header } from './Header';
import { saveSearch } from '../../store/actions';
import { selectSearch } from '../../store/selectors';
import { connect } from 'react-redux';

function mapState2Props(state) {
  return {
    search: selectSearch(state),
  };
}

const mapDispatch2Props = {
  saveSearch,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(Header);

export { Enhanced as Header };
