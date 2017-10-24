/**
 * Created by miguel on 23/10/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDlfX23tXA4haM8D-qWV1MLFh343IOwqDg';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));