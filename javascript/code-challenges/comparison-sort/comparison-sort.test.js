const {sortByRecentYear, sortAlphabetically} = require('./comparison-sort');


describe('Movie Sorting', () => {

  const sampleMovies = [
    { title: 'A Beautiful Mind', year: 2001, genres: ['Biography', 'Drama'] },
    { title: 'The Shawshank Redemption', year: 1994, genres: ['Drama', 'Crime'] },
    { title: 'An Inconvenient Truth', year: 2006, genres: ['Documentary'] },
    { title: 'Batman Begins', year: 2005, genres: ['Action', 'Adventure'] },
    { title: 'Anchorman', year: 2004, genres: ['Comedy'] },
    { title: 'The Matrix', year: 1999, genres: ['Action', 'Sci-Fi'] },
    { title: 'Zorro', year: 2005, genres: ['Action', 'Adventure'] }
  ];

  describe('sortByRecentYear', () => {

    it('should sort by most recent year first', () => {
      const sorted = sortByRecentYear([...sampleMovies]);
      expect(sorted[0].year).toEqual(2006);
      expect(sorted[1].year).toEqual(2005);
      expect(sorted[2].year).toEqual(2005);
      expect(sorted[3].year).toEqual(2004);
      expect(sorted[4].year).toEqual(2001);
      expect(sorted[5].year).toEqual(1999);
      expect(sorted[6].year).toEqual(1994);
    });

    it('should handle movies from the same year', () => {
      const sorted = sortByRecentYear([...sampleMovies]);
      const moviesFrom2005 = sorted.filter(movie => movie.year === 2005);
      expect(moviesFrom2005.length).toBe(2);
    });

  });

  describe('sortAlphabetically', () => {

    it('should sort alphabetically by title ignoring prefixes', () => {
      const sorted = sortAlphabetically([...sampleMovies]);
      expect(sorted).toEqual([
        { title: 'Anchorman', year: 2004, genres: ['Comedy'] },
        { title: 'Batman Begins', year: 2005, genres: ['Action', 'Adventure'] },
        { title: 'A Beautiful Mind', year: 2001, genres: ['Biography', 'Drama'] },
        { title: 'An Inconvenient Truth', year: 2006, genres: ['Documentary'] },
        { title: 'The Matrix', year: 1999, genres: ['Action', 'Sci-Fi'] },
        { title: 'The Shawshank Redemption', year: 1994, genres: ['Drama', 'Crime'] },
        { title: 'Zorro', year: 2005, genres: ['Action', 'Adventure'] }
      ]);
    });

    it('should handle titles starting with "A", "An", "The"', () => {
      const sorted = sortAlphabetically([...sampleMovies]);
      expect(sorted[0].title).toBe('Anchorman');
      expect(sorted[1].title).toBe('Batman Begins');
      expect(sorted[2].title).toBe('A Beautiful Mind');
      expect(sorted[4].title).toBe('The Matrix');
    });

  });

});
