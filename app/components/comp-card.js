import angular from 'angular';

import {} from './comp-card.less';

module.exports = angular.module('app.components.comp-card', [])
.component('compCard', {
  bindings: {
    compData: '<',
  },
  template: require('./comp-card.jade')(),
})
.name;
