import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "./Details.css";

// This should show all details including ALL genres for the selected movie, including title, description, and the image, too! Use Sagas and Redux to handle these requests and data.

// TODO: The details page should have a Back to List button, which should bring the user to the Home/List Page
// Base functionality does not require the movie details to load correctly after refresh of the browser.

// Hint : You can make a GET request for a specific movie. Remember req.params and :id?

function Details() {
  const history = useHistory();
const details = useSelector(store => store.details)
const genres = useSelector(store => store.genres)// probably should be genres not sure


  
  const handleSubmit = (event) => {
    // function for button that switches back to the home page
    event.preventDefault();
    history.push("/");
  };
  return (
    <div>
      <h1> Movie Details</h1>
      <p>{details.description}</p>
   

      <button className="switchPages" onClick={handleSubmit}>
        Go to back to movie list

      </button>
      {genres.map((genre,i)=> (
                    <div>
                      <p key={i}>{genre.category}</p>
                      </div>
                ))}
    </div>
  );
}

export default Details;
