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
