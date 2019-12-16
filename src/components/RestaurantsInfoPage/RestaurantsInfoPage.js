import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './RestaurantsInfoPage.scss';
import { Loader } from '../Loader/Loader';

export class RestaurantsInfoPage extends Component {
  state = {
    activeSection: '',
  }

  componentDidMount() {
    const { loadRestaurant, active } = this.props;

    loadRestaurant(active);
  }

  render(){
    const {
      restaurantListInfo,
    } = this.props;

    if(!restaurantListInfo) return <div className='wrapper'><Loader /></div>

    const {
      ratingBadge,
      title,
      categories,
      disclaimerBadge,
      sectionsMap,
      sections,
      entitiesMap,
    } = restaurantListInfo;
    console.log(restaurantListInfo)
    const currentSections = [...Object.values(sectionsMap)].filter( item => sections.includes(item.uuid))
    const entities = [...Object.values(entitiesMap)]
    console.log(currentSections.map( section => entities.filter( item => section.itemUuids.includes(item.uuid))))
    function createMarkup(data) { return {__html: data}; };
    return (
      <>
        <div className="restaurant-info">
          <div className="restaurant-info-card">
            <p className="restaurant-info-card__title">{title}</p>
            <p className="restaurant-info-card__categories">
              {categories.join(" • ")}
            </p>
            <p dangerouslySetInnerHTML={createMarkup(ratingBadge.text)} />
            <div className="text-container">
              <p
                className="restaurant-info__text"
                dangerouslySetInnerHTML={createMarkup(disclaimerBadge.text)}
              />
              <span className="showe-text"> • &nbsp;&nbsp;More info</span>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="sections-list">
            {currentSections.map(curItem => (
              <a
                onClick={() => this.setState({ activeSection: curItem.title })}
                className={`sections-list__item ${
                  this.state.activeSection === curItem.title
                    ? "sections-list__item-active"
                    : ""
                }`}
              >
                {curItem.title}
              </a>
            ))}
            <div className="list-items">
              {currentSections.map(section => {
                return (
                  <>
                    <h1 className="list-items__title">{section.title}</h1>
                    <div className="list-items__content">
                      {entities
                        .filter(item => section.itemUuids.includes(item.uuid))
                        .map(item => (
                          <div className="list-items-dish">
                            <div className="list-items-dish__text">
                              <h3 className="list-items-dish__title">
                                {item.title}
                              </h3>
                              {/* <p className="list-items-dish__description">
                                {item.description}
                              </p> */}
                              <p className="list-items-dish__price">
                                {item.price}
                              </p>
                            </div>
                            <img
                              className="list-items-dish__img"
                              alt={item.title}
                              src={item.imageUrl}
                            />
                          </div>
                        ))}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
};

// RestaurantCard.propTypes = { 23f2563c-7d25-426b-8d0c-cc4e15ef4e3b
//   imageUrl: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   categories: PropTypes.arrayOf(PropTypes.string),
//   etaRange: PropTypes.string,
// };

// RestaurantCard.defaultProps = {
//   categories: [],
//   etaRange: '',
// };

export default RestaurantsInfoPage;
