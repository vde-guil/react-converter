// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './header.scss';

const Header = ({ amount, updateAmount }) => (
  <div className="header">
    <h1 className="header__title">Converter</h1>
    <input
      className="header__input"
      name="amount"
      value={amount}
      placeholder="Montant"
      type="text"
      onChange={(event) => {
        updateAmount(event.target.value);
      }}
    />
    <label className="header__amount" htmlFor="amount">euros</label>
  </div>
);

Header.propTypes = {
  amount: PropTypes.number.isRequired,
  updateAmount: PropTypes.func.isRequired,
};

export default Header;
