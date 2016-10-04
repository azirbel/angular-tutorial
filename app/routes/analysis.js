import angular from 'angular';

module.exports = angular.module('app.routes.analysis', [])
.config(function($stateProvider) {
  $stateProvider.state('analysis', {
    url: '/analysis',
    template: require('./analysis.jade')(),
    controller: class { },
  });
})
.name;
