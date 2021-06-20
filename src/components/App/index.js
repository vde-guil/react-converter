// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Results from 'src/components/Results';
import ToggleButton from 'src/components/ToggleButton';

// == import data

import currencies from 'src/data/currencies';


// Composant classe

class App extends React.Component {
  constructor(props) {
    super(props);

    // initialize state
    this.state = {
      open: true,
      amount: 1,
      currency: 'United States Dollar',
      rate: 1.09,
      inputSearch: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickCurrency = this.handleClickCurrency.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  componentDidMount() {
    this.updateTitle();
  }

  componentDidUpdate() {
    this.updateTitle();
  }

  handleClick() {
    const { open } = this.state;

    this.setState({
      open: !open,
    });
  }

  handleClickCurrency(newRate, newCurrency) {

    this.setState({
      rate: +newRate,
      currency: newCurrency,
    });
  }

  handleInputChange(newValue) {
    this.setState({
      inputSearch: newValue,
    });
  }

  handleAmountChange(newValue) {
    this.setState({
      amount: +newValue,
    });
  }

  getFilteredCurrencies() {
    const { inputSearch } = this.state;
    if (inputSearch === 0) {
      return currencies;
    }

    return currencies.filter(({ name }) => name.toLowerCase().includes(inputSearch.toLowerCase()));
  }

  updateTitle() {
    const { currency } = this.state;

    document.title = currency;
  }

  computeAmount() {
    const { rate, amount } = this.state;

    return +((rate * amount).toFixed(2));
  }

  render() {

    const {
      open,
      amount,
      currency,
      inputSearch,
    } = this.state;

    const result = this.computeAmount();
    const filteredCurrencies = this.getFilteredCurrencies();
    return (
      <div className="app">
        <Header updateAmount={this.handleAmountChange} amount={amount} />

        <ToggleButton isOpen={open} handleClick={this.handleClick} />

        {open
          && (
            <Currencies
              currencies={filteredCurrencies}
              chooseCurrency={this.handleClickCurrency}
              searchValue={inputSearch}
              updateInput={this.handleInputChange}
            />
          )}
        <Results currency={currency} value={result} />
      </div>
    );
  }
}

// == Export
export default App;
