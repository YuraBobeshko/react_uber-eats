import React from 'react';
import './Loader.scss';

export const Loader = (props) => {
  const {} = props;

  return (
    <div className="loader-container">
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

Loader.propTypes = {

};

export default Loader;
