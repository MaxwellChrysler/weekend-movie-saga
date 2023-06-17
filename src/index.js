import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// ========================== Root Saga  ================================ //
// Create the rootSaga generator function


function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeLatest('FETCH_GENRES' fetchGenres);

}
// ========================== Root Saga  ================================ //

// ========================== FETCH  ================================ //
function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}


// ========================== FETCH  ================================ //


// ======================= Reducers ============================= //
// Used to store movies returned from the server

const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
// ======================= Reducers ============================= //


// ======================= Store ============================= //

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details, // need to add still
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// ======================= Store ============================= //

// ======================= SagaMiddleware ============================= //

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const sagaMiddleware = createSagaMiddleware();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
