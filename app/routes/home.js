import angular from 'angular';

module.exports = angular.module('app.routes.home', [])
.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    template: require('./home.jade')(),
    controller: class { },
  });
})
.name;
