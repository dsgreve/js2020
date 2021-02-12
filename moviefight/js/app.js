
// omdb api http://www.omdbapi.com/?i=tt3896198&apikey=147b4d4f 
const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '147b4d4f',
      s: searchTerm
    }
  });
  //console.log(response.data)

  if (response.data.Error) {
    return[];
  }
  return response.data.Search;
};

const root = document.querySelector('.autocomplete');
root.innerHTML = `
  <label><b>Search For a Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

const onInput = async event => {
  const movies = await fetchData(event.target.value);
    resultsWrapper.innerHTML = ('');

    dropdown.classList.add('is-active');

    for (let movie of movies) {
      const option = document.createElement('a');
      
      // ternary expression
      const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
      option.classList.add('dropdown-item');
      option.innerHTML = `
        <img src="${imgSrc}" alt="${movie.Title}" />
        ${movie.Title}
      `;

      resultsWrapper.appendChild(option);
    }
};

input.addEventListener('input', debounce(onInput, 500));