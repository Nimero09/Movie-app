export const Button = ( {movie, getSearchedMovie}) => {
  const searchMovie = async (selectedMovie) => {
    if (selectedMovie) {
        try {
          // const response = await fetch('https://api.themoviedb.org/3/configuration/countries?api_key=22c9ae54426da7a9d7ae12862c6ef56f&language=en-US')
          const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=22c9ae54426da7a9d7ae12862c6ef56f&query=${selectedMovie}&include_adult=false&language=en-US&page=1`);
          const result = await response.json();
          getSearchedMovie(result.results);
        }
        catch (err) {
          console.log(`Error fetching`, err);
        }
    }
    else {
      console.log('ACM1PT')
    }
  } 
  return (
    <>        
        <button onClick={() => searchMovie(movie)} className='border-2 border-gray-400 cursor-pointer py-2 px-5'>Search</button>
    </>
    
  )
}
