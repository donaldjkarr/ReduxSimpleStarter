import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//create component that produces html
//put this html in the DOM

const API_KEY = "AIzaSyDPPbYxF-khGxhTlYT9hdO6P_Q_McV2N9I";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos});
        });
    }
    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));