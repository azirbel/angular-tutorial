import angular from 'angular';

module.exports = angular.module('app.routes', [
  require('angular-ui-router'),
  require('./home.js'),
  require('./analysis.js'),
])
.name;
