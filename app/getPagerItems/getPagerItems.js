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
