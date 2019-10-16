import React, { useState } from 'react';
import ReactDom from 'react-dom';
import{Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
      <Route exact path='/' component={MovieList} />
      <Route exact path='/movie-list' render={props => (
        <MovieList
        items={savedList}
        {...props}

        />
      )}

      />
   
      </div>
  );
};

export default App;
