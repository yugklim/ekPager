/**
 * Created by eklimenko on 03.04.2015.
 */
;
define(['angular', 'angular-mocks', 'ekPagerModule', 'getPagerItems'], function (angular, ekPagerModule) {

    describe('does the ekPager returns right number of anchors', function () {
        var $compile, $rootScope;
        beforeEach(module('ekPager/ekPager_template.html'));
        beforeEach(function () {
            module('ekPagerModule');
            inject(function (_$compile_, _$rootScope_, $cacheFactory) {
              $compile = _$compile_;
              $rootScope = _$rootScope_;
            });
          }
        );

        it('if totalPages="20" pagesToShow="10" currentPage="5" then there should be 14 items', function () {
          var html = '<ek-pager totalPages="20" pagesToShow="10" currentPage="5"></ek-pager>';
          var elem = compile(html);
          expect(elem.html()).toBeGreaterThan('');
          expect(elem[0].children.length).toBe(14);
        });

        it('if totalPages="30" pagesToShow="5" currentPage="5" then there should be 9 items', function () {
          var html = '<ek-pager totalPages="30" pagesToShow="5" currentPage="5"></ek-pager>';
          var elem = compile(html);
          expect(elem.html()).toBeGreaterThan('');
          expect(elem[0].children.length).toBe(9);
        });

        function compile(html) {
          var scope = $rootScope.$new();
          //get the jqLite or jQuery element
          var elem = angular.element(html);
          var compiled = $compile(elem);
          compiled(scope);
          scope.$digest();
          return elem;
        }

      }
    );

  }
);
