/* eslint-disable max-len */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './currencies.scss';
import Currency from './Currency';

class Currencies extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {

  }

  render() {
    // console.log("   currencies render");

    const {
      currencies,
      chooseCurrency,
      searchValue,
      updateInput,
    } = this.props;

    return (
      <div className="currencies">
        <input
          type="text"
          placeholder="Rechercher"
          className="currencies__search"
          value={searchValue}
          onChange={(event) => {
            updateInput(event.target.value);
          }

          }
        />
        <ul className="currencies__list">
          {
            currencies.map(({ name, rate }) => (

              <Currency
                key={name}
                name={name}
                rate={rate}
                chooseCurrency={chooseCurrency}
              />

            ))
          }
        </ul>
      </div>
    );
  }
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      rate: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  chooseCurrency: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default Currencies;
