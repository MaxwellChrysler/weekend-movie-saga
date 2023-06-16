import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './Details.css'



function Details () {
    const history = useHistory();


    const handleSubmit = (event) => { // function for button to change pages
        event.preventDefault();
        history.push("/");
      };
    return (

        <div>
<button className="switchPages" onClick={handleSubmit}>Go to movie list </button>
            Details page 
        </div>
    )



}

export default Details;