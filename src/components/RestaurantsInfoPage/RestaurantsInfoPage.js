import React, { Component } from 'react';
import './RestaurantsInfoPage.scss';
import { Loader } from '../Loader/Loader';
import СhangeDish from '../СhangeDish/СhangeDish'

export class RestaurantsInfoPage extends Component {
  state = {
    activeSection: '',
    showСhangeDish: false,
    uuidDish: null,
  }

  componentDidMount() {
    const { loadRestaurant } = this.props;
    loadRestaurant(window.location.href.match(/\?.+/gs)[0].replace(/\?/gs, ""));
    window.scrollTo(0, 0);
  }

  render(){
    const {
      activeSection,
      showСhangeDish,
      uuidDish,
    } = this.state;

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

const setСhangeDish = (data = null) => {
  this.setState({uuidDish:data, showСhangeDish: !this.state.showСhangeDish})
}
console.log(this.state)
    const currentSections = [...Object.values(sectionsMap)].filter( item => sections.includes(item.uuid))
    const entities = [...Object.values(entitiesMap)]
    function createMarkup(data) { return {__html: data}; };
    return (
      <div className='section'>
        {showСhangeDish ? (
          <>
          <div className="wrapper-СhangeDish">
              <СhangeDish data={uuidDish} func={setСhangeDish} />
            </div>
            <span onClick={() => setСhangeDish()} className="bc"></span>
          </>
        ) : null
        }
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
            {currentSections.map((curItem, index) => (
              <a
                key={curItem.uuid}
                href={`#section-${index}`}
                onClick={() => this.setState({ activeSection: curItem.title })}
                className={`sections-list__item ${
                  activeSection === curItem.title
                    ? "sections-list__item-active"
                    : ""
                }`}
              >
                {curItem.title}
              </a>
            ))}
            <div className="list-items">
              {currentSections.map((section, index) => {
                return (
                  <div className='list-item' key={section.uuid}>
                    <span
                      className="list-items__id"
                      id={`section-${index}`}
                    ></span>
                    <h1 className="list-items__title">{section.title}</h1>
                    <div className="list-items__content">
                      {entities
                        .filter(item => section.itemUuids.includes(item.uuid))
                        .map(item => (
                          <div
                            onClick={() => setСhangeDish(item.uuid)}
                            key={item.uuid}
                            className="list-items-dish"
                          >
                            <div className="list-items-dish__text">
                              <h3 className="list-items-dish__title">
                                {item.title}
                              </h3>
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RestaurantsInfoPage;
