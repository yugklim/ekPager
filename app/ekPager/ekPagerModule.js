;define('ekPagerModule', ['angular', 'getPagerItems'], function (angular, getPagerItems) {
  return angular.module('ekPagerModule', []).
    directive('ekPager', function () {
      return {
        link: function (scope, element, attrs) {
          scope.pagerItems = getPagerItems(attrs['totalpages'], attrs['pagestoshow'], attrs['currentpage']);
        },
        templateUrl: 'ekPager/ekPager_template.html'
      }
    });
});




