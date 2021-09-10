it('Shows an autocomplet', () => {
  createAutoComplete({
    root: document.querySelector('#target'),
    fetchData() {
      return [
        {Title: 'Avengers'},
        {Title: 'Not Avengers'},
        {Title: 'Zorro'},
      ];
    },
    renderOption(movie) {
      return movie.Title;
    }
  });

  const dropdown = document.querySelector('.dropdown');

  expect(dropdown.className).not.to.include('is-active');
});