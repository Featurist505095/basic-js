seasons = {
  11: 'winter',
  0: 'winter',
  1: 'winter',
  2: 'spring',
  3: 'spring',
  4: 'spring',
  5: 'summer',
  6: 'summer',
  7: 'summer',
  8: 'autumn',
  9: 'autumn',
  10: 'autumn'
};

module.exports = function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!';
  }
  date.valueOf();
  if (seasons[date.getMonth()] != undefined) {
    return seasons[date.getMonth()];
  }
  return false;
};
