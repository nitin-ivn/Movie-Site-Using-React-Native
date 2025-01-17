import React,{createContext, useState, useEffect} from "react";

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchMovies = async () => {
        try{
            const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
            const result = await response.json();
            setMovies(result || []);
        } catch(e) {
            console.error(e);
        }
    }

    const fetchSearchData = async (search_term) => {
        try{
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search_term}`)
            const result = response.json();
            setSearchMovies(result.data || {});
        } catch(e){
            console.error(e);
        }
    }

    const findMovieById = (id) => {
       return movies.find(movie => movie.show.id === Number(id) || null);
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <DataContext.Provider
         value={{
            movies,
            searchMovies,
            searchTerm,
            setSearchTerm,
            fetchMovies,
            fetchSearchData,
            findMovieById,
         }}
        >
            {children}
        </DataContext.Provider>
    )
}

export {DataContext, DataProvider};