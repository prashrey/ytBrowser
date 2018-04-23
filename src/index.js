//Import the react libraries
import React, { Component } from 'react';              //Import element creation library
import ReactDOM from 'react-dom';       //Import element render to DOM library
import SearchBar from './Components/SearchBar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/VideoList.js';
import VideoDetail from './Components/VideoDetail.js';

const API_KEY = 'AIzaSyAHpncBQxs-D6A97u4gq3aOUS9RFZI8EBY';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo:null
        };
        this.videoSearch("");
    }

    videoSearch(termTS) {
        YTSearch({ key: API_KEY, term: termTS }, (videos) => {
            //console.log(videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChanged={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}
                                                                
// Put the component in DOM
ReactDOM.render(<App />, document.getElementById("root"));