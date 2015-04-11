define(['require', 'angular', 'ekPagerModule'], function (require, ng) {
    require(['domReady!'], function (document) {
      ng.bootstrap(document, ['ekPagerModule']);
    });
  }
);

;
define('centerSequence', ['underscore'], function (_) {
  return function (_) {
    return function (sequence, size, center) {
      if (_.max(sequence) - center < Math.ceil(size / 2)) {
        return _.last(sequence, size);
      }
      if (center - _.min(sequence) < Math.ceil(size / 2)) {
        return _.first(sequence, size);
      }
      var part1 = Math.ceil(size / 2);
      var part2 = size - part1;
      return sequence.slice(center - part1, center + part2);
    };
  }(_);
});


;
define(['angular', 'getPagerItems'], function (angular, getPagerItems) {
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





;
define('getPagerItems', ['underscore', 'centerSequence'], function (_, centerSequence) {
  return function (_, centerSequence) {

    return function (totalPages, pagesToShow, currentPage) {
      totalPages = Number(totalPages);
      pagesToShow = Number(pagesToShow);
      currentPage = Number(currentPage);
      var innerSequence = centerSequence(_.range(1, totalPages + 1), pagesToShow, currentPage);
      var pagerItems = [];
      _.forEach(innerSequence, function (pageNumber) {

          if (pageNumber === _.min(innerSequence) && innerSequence.length > 1 && currentPage > 1) {
            pagerItems.push({page: 1, symbol: "<<"});
            pagerItems.push({page: currentPage - 1, symbol: "<"});
          }

          pagerItems.push({page: pageNumber, symbol: pageNumber.toString()});

          if (pageNumber === _.max(innerSequence) && totalPages > 1 && currentPage < totalPages) {
            pagerItems.push({page: currentPage + 1, symbol: ">"});
            pagerItems.push({page: totalPages, symbol: ">>"});
          }
        }
      );
      return pagerItems;
    }
  }(_, centerSequence);
});

require.config({

  paths: {
    'domReady': '../bower_components/domReady/domReady',
    'angular': '../bower_components/angular/angular',
    'ekPagerModule': 'ekPager/ekPagerModule',
    'getPagerItems': 'getPagerItems/getPagerItems',
    'underscore': '../bower_components/underscore/underscore',
    'centerSequence': 'centerSequence/centerSequence'
  },

  shim: {
    'angular': {
      exports: 'angular'
    }
  },

  // запустить приложение
  deps: ['bootstrap']
});
