// == Import npm
import React from 'react';

import PropTypes from 'prop-types';

// == Import
import './results.scss';

const Results = ({ currency, value }) => (
  <div className="results">
    <h2 className="results__value">{value}</h2>
    <p className="results__currency">{currency}</p>
  </div>
);

Results.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Results;
