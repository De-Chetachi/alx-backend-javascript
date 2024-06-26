/* eslint-disable */

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // public instance getters for all attributes
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // public instance setters for all attributes
  set amount(amount) {
    this._amount = amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
