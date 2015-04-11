;define(['getPagerItems'],function (getPagerItems) {

  describe("verify_whether_the_pager_items_were_formed_in_a_proper_way", function () {

    it("should be equal to", function () {
      expect(getPagerItems(10, 3, 1)).toEqual([
        {page:1, symbol:'1'},
        {page:2, symbol:'2'},
        {page:3, symbol:'3'},
        {page:2, symbol:'>'},
        {page:10, symbol:'>>'}
      ]);

      expect(getPagerItems(10, 3, 10)).toEqual([
        {page:1, symbol:'<<'},
        {page:9, symbol:'<'},
        {page:8, symbol:'8'},
        {page:9, symbol:'9'},
        {page:10, symbol:'10'}
      ]);

      expect(getPagerItems(10, 3, 5)).toEqual([
        {page:1, symbol:'<<'},
        {page:4, symbol:'<'},
        {page:4, symbol:'4'},
        {page:5, symbol:'5'},
        {page:6, symbol:'6'},
        {page:6, symbol:'>'},
        {page:10, symbol:'>>'}
      ]);

      expect(getPagerItems(200, 10, 9)).toEqual([
        {page: 1, symbol: '<<'},
        {page: 8, symbol: '<'},
        {page: 5, symbol: '5'},
        {page: 6, symbol: '6'},
        {page: 7, symbol: '7'},
        {page: 8, symbol: '8'},
        {page: 9, symbol: '9'},
        {page: 10, symbol: '10'},
        {page: 11, symbol: '11'},
        {page: 12, symbol: '12'},
        {page: 13, symbol: '13'},
        {page: 14, symbol: '14'},
        {page: 10, symbol: '>'},
        {page: 200, symbol: '>>'}
      ]);

    });

  });

});

