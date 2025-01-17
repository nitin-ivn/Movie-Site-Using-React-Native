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
            const result = await response.json();
            setSearchMovies(result || []);
            console.log(result);
        } catch(e){
            console.error(e);
        }
    }

    const findMovieById = (id) => {
        const movie = searchMovies.length > 0
        ? searchMovies.find(movie => movie.show.id === Number(id))
        : movies.find(movie => movie.show.id === Number(id));
        return movie || null;
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
            setSearchMovies,
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