define(['require', 'angular', 'ekPagerModule'], function (require, ng) {
    require(['domReady!'], function (document) {
      ng.bootstrap(document, ['ekPagerModule']);
    });
  }
);
