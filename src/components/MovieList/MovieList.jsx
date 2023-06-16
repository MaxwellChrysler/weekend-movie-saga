import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './MovieList.css'

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' }); // payload is the movie so we move it to the index and then in the index the movie object will be action.payload and action.payload is an object and then we can access the id and then target that and call the id to display those details of to the get request genres path rest of it send to another called like details reducer that way the reducer can return action.payload that will just 
        //be an ojbect that we can just plug in something like in the details page details.useSelector => store 
    }, []);
console.log('comments dont count for doing a commit')

    const handleSubmit = (event) => { // function for button to change pages
        event.preventDefault();
        history.push("/details");
      };

    return (
        <main>
            <h1>Click on a movie poster to show details</h1>
            <button className="switchPages" onClick={handleSubmit}> poster here</button>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
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