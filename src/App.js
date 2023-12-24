import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Movie from "./components/Movie";
import {useEffect, useReducer} from "react";
import axios from "axios";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=8e256fcc";
const MOVIE_API_KEY = "8e256fcc"
const currentYear = new Date().getFullYear();
const githubLink = 'https://github.com/Mohamed-Amr7';

const initialState = {
    movies: [],
    loading: true,
    errorMessage: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_MOVIES_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_MOVIES_SUCCESS":
            return {
                ...state,
                loading: false,
                movies: action.payload
            };
        case "SEARCH_MOVIES_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        default:
            return state;
    }
};
const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get(MOVIE_API_URL).then(jsonResponse => {
            dispatch({
                type: "SEARCH_MOVIES_SUCCESS",
                payload: jsonResponse.data.Search
            });
        });
    }, []);

    const search = searchMovie => {
        dispatch({
            type: "SEARCH_MOVIES_REQUEST"
        });

        axios(`https://www.omdbapi.com/?s=${searchMovie}&apikey=${MOVIE_API_KEY}`).then(
            jsonResponse => {
                if (jsonResponse.data.Response === "True") {
                    dispatch({
                        type: "SEARCH_MOVIES_SUCCESS",
                        payload: jsonResponse.data.Search
                    });
                } else {
                    dispatch({
                        type: "SEARCH_MOVIES_FAILURE",
                        error: jsonResponse.data.Error
                    });
                }
            }
        );
    };

    const {movies, errorMessage, loading} = state;

    const retrievedMovies =
        loading && !errorMessage ? (<img className="spinner" src="https://i.gifer.com/ZZ5H.gif" alt="Loading spinner"/>)
            : errorMessage ? (<div className="error-message">{errorMessage}</div>) :
                (movies.map((movie) => (
                        <Movie movie={movie}/>
                    ))
                );
    return (
        <div>
            <Header text={"Movie Search App"}/>
            <Search search={search}/>
            <div className={"movie-list"}>{retrievedMovies}</div>
            <Footer text={"Movie Search App"} currentYear={currentYear} githubLink={githubLink}/>
        </div>
    );
}

export default App;
