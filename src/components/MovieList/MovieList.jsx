import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './MovieList.css'

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' }); 
        // payload is the movie so we move it to the index and then in the index the movie object will be action.payload and action.payload
        // is an object and then we can access the id and then target that and call 
        //the id to display those details of to the get request genres path rest of it send to another called like details reducer that way the reducer can return action.payload that will just 
        //be an ojbect that we can just plug in something like in the details page details.useSelector => store 
    }, []);




    const handleSubmit = (event) => { // function for button to change pages
        event.preventDefault();
        history.push("/details"); // This will also be the function that dispatchs 
      };

    return (
        <main>
           
           
            <h1>Movie List</h1>
            <h4>Click on a movie poster to show details</h4>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className="poster-container" onClick={handleSubmit} key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;