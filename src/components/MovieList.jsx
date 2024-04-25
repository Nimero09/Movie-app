import React, { useState, useEffect } from 'react'

export const MovieList = ( {searchedMovie, country} ) => {
  const filteredMovies = searchedMovie.filter(x => x.poster_path !== null && new Date(x.release_date) < Date.now());
  const [streamingList, setStreamingList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (filteredMovies.length > 0) {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${filteredMovies[0].id}/watch/providers?api_key=22c9ae54426da7a9d7ae12862c6ef56f`);
          const result = await response.json();
          setStreamingList(result.results[country['iso_3166_1']]['flatrate']);
          console.log(`The result is`, result);
          console.log(streamingList);
        }
      }
      catch (err) {
        console.log(`Error fetching`, err);
      }
    };
    fetchData();
  }, [searchedMovie]);
  

  return (
    <section className='max-w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {filteredMovies.map((x, i) => (
            <div key={i}>
                <h2>{x.title || x.name}</h2>
                <img src={`http://image.tmdb.org/t/p/w500${x.poster_path}`} alt="" />
                <span key={i}>Available in</span>
                <ul>
                  {streamingList.map((x,i) => (
                    <li id={i}>{x.provider_name}</li>
                  ))}
                </ul>
            </div>
        ))}
    </section>
  )
}
