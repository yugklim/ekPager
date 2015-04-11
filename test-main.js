
var tests = [];
for (var file in window.__karma__.files) {
  if (/test\.js$/.test(file)) {
    tests.push(file);
  }
}

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app/',

  paths: {
    'underscore': '../bower_components/underscore/underscore',
    'angular': '../bower_components/angular/angular',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    'centerSequence': 'centerSequence/centerSequence',
    'getPagerItems': 'getPagerItems/getPagerItems',
    'ekPagerModule': 'ekPager/ekPagerModule'
  },

  'underscore': {
    exports: '_'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-mocks': {
      deps: ['angular'],
      exports: 'angular.mock'
    }
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});



