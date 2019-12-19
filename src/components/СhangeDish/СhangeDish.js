import React, { Component } from 'react'
import './СhangeDish.scss'
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';

class СhangeDish extends Component {
  state = {
    menuItems: null,
    error: false,
  }
  async componentDidMount() {
    const { data } = this.props
      fetch(`https://mate-uber-eats-api.herokuapp.com/api/v1/menu-items/${data}`)
      .then(res => res.json())
      .then(({ data }) => {
        this.setState({menuItems: data})
      }).catch(error => this.setState({error}))
      window.scrollTo(80, 0);
  }
  render() {
    console.log(this.state)
    const {
      data,
      func,
    } = this.props;

    if(this.state.error !== false) return <div className='errorWrap'><Error message={'Приносим свои извинения'} /></div>;
    if(this.state.menuItems === null) return <Loader />;


    const {
      imageUrl,
      title,
      customizationsList,
    } = this.state.menuItems;
    return (
      <div className='changeDish'>
        <img alt={title} className='changeDish__img' src={imageUrl} />
        <button className='changeDish__button' onClick={() => func()}>X</button>
        <h3 className='changeDish__title'>{title}</h3>
        <p className='changeDish__itemDescription'>Cheddar cheese, Boston lettuce, tomatoes, onion, pickles and firm sauce 275 g.</p>
        {
          customizationsList.slice(0, 6).map( item => {
            const {
              title,
              maxPermitted,
              options,
              uuid,
            } = item;
            return (
              <>
                <div key={uuid} className='changeDish-block'>
                  <h4 className='changeDish-block__title'>{title}</h4>
                  <p className='changeDish-block__des'>Choose up to 3</p>
                </div>
                <div key={uuid}>
                  {options.slice(0, 3).map(item => {
                    return (
                      <label key={item.uuid} className="check option">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box"></span>
                          <span className='text'>{item.title}</span>
                      </label>
                    )
                  })}
                </div>
              </>
            );
          })
        }
      </div>
    )
  }
}

export default СhangeDish;
