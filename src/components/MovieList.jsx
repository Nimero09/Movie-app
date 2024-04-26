import React, { useState, useEffect } from 'react';
import Icons from './Icons';

export const MovieList = ({ searchedMovie, country }) => {
  const filteredMovies = searchedMovie.filter(
    (x) => x.poster_path !== null && new Date(x.release_date) < Date.now()
  );
  const [streamingLists, setStreamingLists] = useState({});

  useEffect(() => {
    const fetchData = async (movieId) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=22c9ae54426da7a9d7ae12862c6ef56f`
        );
        const result = await response.json();
        
        // Check if result contains the expected data structure
        if (result.results && result.results[country['iso_3166_1']] && result.results[country['iso_3166_1']]['flatrate']) {
          setStreamingLists((prevLists) => ({
            ...prevLists,
            [movieId]: result.results[country['iso_3166_1']]['flatrate'],
          }));
        } 
      } catch (err) {
        console.log(`Error fetching`, err);
      }
    };

    filteredMovies.forEach((movie) => {
      fetchData(movie.id);
    });
  // eslint-disable-next-line
  }, [searchedMovie]);

  return (
    <section className='max-w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {filteredMovies.map((movie, i) => (
        <div className='card' key={i}>
          <img className='mb-5' src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='Movie posters' />
          <h2 className='font-bold mb-3'>{movie.title || movie.name}</h2>
          {streamingLists[movie.id] ? <span className='mb-2 block'>You can watch this content on:</span> : null}
          <ul className='flex gap-4 justify-center flex-wrap'>
            {streamingLists[movie.id]
              ? streamingLists[movie.id].map((streamingItem, j) => (
                  <li key={j}>{<img alt='streaming company' src={Icons(streamingItem.provider_name)}></img>}</li>
                ))
              : <span>This movie is not available in your country</span>}
          </ul>

        </div>
      ))}
    </section>
  );
};
