import angular from 'angular';

const COMPS = [
  {
    street: '116 New Montgomery St',
    bedrooms: 3,
    bathrooms: 4,
    price_cents: 32500000,
  },
  {
    street: '123 Sesame St',
    bedrooms: 2,
    bathrooms: 2,
    price_cents: 18000000,
  },
  {
    street: '3757 Paseo Del Sol',
    bedrooms: 5,
    bathrooms: 4,
    price_cents: 37800000,
  },
];

module.exports = angular.module('app.components.similar-comps', [])
.component('similarComps', {
  template: require('./similar-comps.jade')(),
  controller: class {
    constructor() {
      this.COMPS = COMPS;
    }
  }
})
.name;
