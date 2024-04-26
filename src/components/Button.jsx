export const Button = ( {movie, getSearchedMovie, inputError, moviesError}) => {
  const searchMovie = async (selectedMovie) => {
    if (selectedMovie) {
        try {
          inputError(false);
          const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=22c9ae54426da7a9d7ae12862c6ef56f&query=${selectedMovie}&include_adult=false&language=en-US&page=1`);
          const result = await response.json();
          getSearchedMovie(result.results);
          if(Object.keys(result.results).length === 0) moviesError(true);
          else moviesError(false);
        }
        catch (err) {
          console.log(`Error fetching`, err);
        }
    }
    else {
      moviesError(false);
      inputError(true)
    }
  } 
  return (
    <>        
        <button onClick={() => searchMovie(movie)} className='border-2 border-gray-400 cursor-pointer py-2 rounded-lg px-10 md:px-5 self-center md:self-end mt-5 md:mt-0 bg-yellow-500 hover:bg-yellow-700 text-white font-semibold border-none'>Search</button>
    </>
    
  )
}
