import angular from 'angular';

module.exports = angular.module('app.components', [
  require('./comp-card.js'),
  require('./similar-comps.js'),
])
.name;
