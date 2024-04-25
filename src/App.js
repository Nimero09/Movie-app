import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './pages/Navbar';
import { Dropdown } from './components/Dropdown';
import { Input } from './components/Input' 
import { Button } from './components/Button';
import { MovieList } from './components/MovieList';

function App() {
  // Countries list hook
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/configuration/countries?api_key=22c9ae54426da7a9d7ae12862c6ef56f&language=en-US');
        const result = await response.json();
        setCountries(result);
        console.log(countries)
      }
      catch (err) {
        console.log('Errors fetching', err);
      }
    }
    fetchData();
    // eslint-disable-next-line
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key': '9094dbf29dmshd6ac12fe38516aap1fb092jsnd9c12cb295b4',
  //         'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  //       }
  //     };
  //     try {
  //       const response = await fetch(`https://streaming-availability.p.rapidapi.com/countries`, options);
  //       const result = await response.json();
  //       const countriesArray = Object.keys(result.result).map(key => ({
  //         key,
  //         ...result.result[key]
  //       }))
  //       setCountries(countriesArray);
  //     }
  //     catch (err) {
  //       console.log(`Error fetching`, err);
  //     }
  //   }
  // fetchData();
  // }, [])

  // Movie selection hook
  const [movie, setMovie] = useState('');
  const selectMovie = (movie) => {
    setMovie(movie);
  }

  useEffect(() => {
    console.log(movie);
  }, [movie])

  // Country selection hook
  const [selected, setSelected] = useState('');
  const selectCountry = (country) => {
    setSelected(country);
  }

  useEffect(() => {
    console.log(selected)
  }, [selected])

  // Searches movie Hook
  const [searchedMovie, setSearchedMovie] = useState([])
  const getSearchedMovie = (movie) => {
    setSearchedMovie(movie);
  }

  useEffect(() => {
    console.log(searchedMovie)
  }, [searchedMovie])
  
  return (
    <section className='max-w-[90%] text-center mx-auto'>
        <Navbar />
        <section className='grid place-items-center grid-cols-3 mb-10'>
          <Dropdown 
            countries={countries}
            selected={selected}
            setSelected={selectCountry}
          />
          <Input selectMovie={selectMovie} />
          <Button 
            movie={movie}
            getSearchedMovie={getSearchedMovie}
          />
        </section>
        <MovieList 
          searchedMovie={searchedMovie} 
          country={selected}
        />
    </section>
  );
}

export default App;
