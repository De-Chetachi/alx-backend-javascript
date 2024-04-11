/* eslint-disable */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // public instance getter for eacj attribute
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // public instance setters for eacj attribute
  set code(code) {
    this._code = code;
  }

  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
