// arguments array of objects
//  Each Movie object has a title (string), a year (number), and a list of genres (array of strings)

// One function will sort the movies by most recent year first
const sortByRecentYear = (arr) => {
  return arr.sort((a, b) => b.year - a.year);
};
// One function will sort the movies, alphabetical by title, but will ignore any leading “A”s, “An”s, or “The”s.
const sortAlphabetically = (arr) => {
  const titleWithoutPrefix = title => title.replace(/^(A |An |The )/, '');
  return arr.sort((a, b) => titleWithoutPrefix(a.title).localeCompare(titleWithoutPrefix(b.title)));
};

module.exports = {sortByRecentYear, sortAlphabetically};
