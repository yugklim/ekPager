;
define(['underscore', 'centerSequence'], function (_, centerSequence) {

  describe("verify_whether_the_sequence_was_centrified_in_a_proper_way", function () {

    it("should be equal to", function () {
      expect(centerSequence(_.range(1, 11), 4, 3)).toEqual([2, 3, 4, 5]);
      expect(centerSequence(_.range(1, 11), 5, 3)).toEqual([1, 2, 3, 4, 5]);
      expect(centerSequence(_.range(1, 11), 5, 1)).toEqual([1, 2, 3, 4, 5]);
      expect(centerSequence(_.range(1, 11), 5, 10)).toEqual([6, 7, 8, 9, 10]);
      expect(centerSequence(_.range(1, 71), 5, 10)).toEqual([8, 9, 10, 11, 12]);
      expect(centerSequence(_.range(1, 71), 5, 30)).toEqual([28, 29, 30, 31, 32]);
      expect(centerSequence(_.range(1, 201), 10, 9)).toEqual([5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    });

  });

});

