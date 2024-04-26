import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './pages/Navbar';
import { Dropdown } from './components/Dropdown';
import { Input } from './components/Input' 
import { Button } from './components/Button';
import { MovieList } from './components/MovieList';
import { Hero } from './components/Hero';

function App() {
  // Countries list hook
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/configuration/countries?api_key=22c9ae54426da7a9d7ae12862c6ef56f&language=en-US');
        const result = await response.json();
        setCountries(result);
      }
      catch (err) {
        console.log('Errors fetching', err);
      }
    }
    fetchData();
    // eslint-disable-next-line
  }, [])

  // Movie selection hook
  const [movie, setMovie] = useState('');
  const selectMovie = (movie) => {
    setMovie(movie);
  }
  
  // Country selection hook
  const [selected, setSelected] = useState('');
  const selectCountry = (country) => {
    setSelected(country);
  }

  // Searches movie Hook
  const [searchedMovie, setSearchedMovie] = useState([])
  const getSearchedMovie = (movie) => {
    setSearchedMovie(movie);
  }

  // Error handling hooks
  const [inputError, setInputError] = useState(false);
  const [noMoviesError, setNoMoviesError] = useState(false);

  const getInputError = (bool) => {
    setInputError(bool);
  }

  const getNoMoviesError = (bool) => {
    setNoMoviesError(bool)
  }

  return (
    <section className='max-w-[90%] text-center mx-auto pb-10'>
        <Navbar />
        <main className='md:h-[500px] flex gap-5 justify-center items-center flex-col'>
          <Hero />
          <section className='flex flex-col md:flex-row md:justify-center md:items-center gap-5 mb-20 md:mb-10'>
            <div>
              <span className='text-sm mb-3 block'>Select your country</span>
              <Dropdown 
                countries={countries}
                selected={selected}
                setSelected={selectCountry}
              />
            </div>
            <div>
              <span className='text-sm mb-3 block'>Type the movie you're looking for</span>
              <Input 
                selectMovie={selectMovie} 
                noMoviesError={noMoviesError}
              />
              {noMoviesError ? <div className='text-left mt-2 text-red-400 mb-[-30px]'>Movie was not found</div> : null}
              {inputError ? <div className='text-left mt-2 text-red-400 mb-[-30px]'>Input can not be blank</div> : null}
            </div>
            <Button 
              movie={movie}
              getSearchedMovie={getSearchedMovie}
              inputError={getInputError}
              moviesError={getNoMoviesError}
            />
          </section>
        </main>
        <MovieList 
          searchedMovie={searchedMovie} 
          country={selected}
        />
    </section>
  );
}

export default App;
