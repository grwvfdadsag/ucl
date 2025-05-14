function filterMovies() {
  const genre = document.getElementById('genre').value;
  const year = document.getElementById('year').value;
  const rating = document.getElementById('rating').value;
  const movies = document.querySelectorAll('.movie');

  movies.forEach(movie => {
    const movieGenre = movie.getAttribute('data-genre');
    const movieYear = movie.getAttribute('data-year');
    const movieRating = parseFloat(movie.getAttribute('data-rating'));

    const genreMatch = genre === 'all' || movieGenre === genre;
    const yearMatch = year === 'all' || movieYear === year;
    const ratingMatch = rating === 'all' || movieRating >= parseFloat(rating);

    if (genreMatch && yearMatch && ratingMatch) {
      movie.style.display = 'block';
    } else {
      movie.style.display = 'none';
    }
  });
}
card.innerHTML

function filterByName() {
  const name = document.getElementById('nameFilter').value.toLowerCase();
  const movies = document.querySelectorAll('.movie');

  movies.forEach(movie => {
    const title = movie.querySelector('h3').textContent.toLowerCase();

    if (title.includes(name)) {
      movie.style.display = 'block';
    } else {
      movie.style.display = 'none';
    }
  });
}