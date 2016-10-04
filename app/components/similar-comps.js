import angular from 'angular';

module.exports = angular.module('app.components.similar-comps', [])
.component('similarComps', {
  bindings: {
    compData: '<',
  },
  template: require('./similar-comps.jade')(),
})
.name;
