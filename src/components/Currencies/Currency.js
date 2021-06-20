import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ name, rate, chooseCurrency }) => (
  <li
    // key={name}
    data-rate={rate}
    className="currencies__list__elem"
    onClick={() => {
      chooseCurrency(rate, name);
    }}
  >
    { name}
  </li>
);

Currency.propTypes = {
  rate: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  chooseCurrency: PropTypes.func.isRequired,
};

export default Currency;
