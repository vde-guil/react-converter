// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './toggleButton.scss';

const ToggleButton = ({ isOpen, handleClick }) => {
  let cssClass = 'toggleButton';

  if (isOpen) {
    cssClass += ' toggleButton--open';
  }

  return (
    <button
      className={cssClass}
      type="button"
      onClick={handleClick}
    >
      =
    </button>
  );
};

ToggleButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ToggleButton;
