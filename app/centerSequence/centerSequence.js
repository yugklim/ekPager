;define('centerSequence', ['underscore'], function (_) {
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
});

