import angular from 'angular';

const COMPS = [
  '116 New Montgomery St',
  '123 Sesame St',
  '3757 Paseo Del Sol',
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
