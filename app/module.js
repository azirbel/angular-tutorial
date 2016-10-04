import angular from 'angular';

module.exports = angular.module('app', [
  require('./components'),
  require('./routes'),
])
.name;
