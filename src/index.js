import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
//create component that produces html
//put this html in the DOM

const API_KEY = "AIzaSyDPPbYxF-khGxhTlYT9hdO6P_Q_McV2N9I";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
            console.log(data);
        });
    }
    render() {
        return (
            <div>
                <SearchBar/>

            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));