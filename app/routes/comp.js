import angular from 'angular';

module.exports = angular.module('app.routes.analysis.comp', [])
.config(function($stateProvider) {
  $stateProvider.state('analysis.comp', {
    url: '/:compId',
    template: require('./comp.jade')(),
    controllerAs: 'compCtrl',
    controller: class {
      constructor(compData, $stateParams) {
        this.compData = _.find(compData, {
          id: parseInt($stateParams.compId, 10)
        });
      }
    },
  });
})
.name;
