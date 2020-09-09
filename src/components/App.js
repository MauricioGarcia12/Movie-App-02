import React,{Fragment} from 'react';
import Header from './elements/Header'
import HomePage from './HomePage'
import Movie from './Movie'
import NotFound from './NotFound'
import {Router} from '@reach/router'

const App = () => {
    return(
        <Fragment>

             <Header/>
             <Router>
                <HomePage path="/"/>  
                <Movie path="/:movieId"/>
                <NotFound default/>
             </Router>
        </Fragment>
    )
};
 
export default App;
