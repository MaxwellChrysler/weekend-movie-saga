import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Details.css";

// This should show all details including ALL genres for the selected movie, including title, description, and the image, too! Use Sagas and Redux to handle these requests and data.

// TODO: The details page should have a Back to List button, which should bring the user to the Home/List Page
// Base functionality does not require the movie details to load correctly after refresh of the browser.

// Hint : You can make a GET request for a specific movie. Remember req.params and :id?

function Details() {
  const history = useHistory();

  
  const handleSubmit = (event) => {
    // function for button that switches back to the home page
    event.preventDefault();
    history.push("/");
  };
  return (
    <div>
      <button className="switchPages" onClick={handleSubmit}>
        Go to back to movie list{" "}
      </button>
    </div>
  );
}

export default Details;
