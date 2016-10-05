import angular from 'angular';

const URL = 'https://s3.amazonaws.com/opendoor-problems/comps.json';

module.exports = angular.module('app.routes.analysis', [
  require('./comp.js'),
])
.config(function($stateProvider) {
  $stateProvider.state('analysis', {
    url: '/analysis',
    template: require('./analysis.jade')(),
    resolve: {
      compData: function($http) {
        return $http.get(URL).then(function(response) {
          return response.data.comps.map((comp) => comp.listing);
        });
      },
    },
    controllerAs: 'analysisCtrl',
    controller: class {
      constructor(compData) {
        this.compData = compData;
      }
    },
  });
})
.name;
