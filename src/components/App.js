import React from 'react';
import he from 'he';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    const adaptedVideos = response.data.items.map((video) => {
      return {
        id: video.id.videoId,
        title: he.decode(video.snippet.title),
        description: he.decode(video.snippet.description),
        thumbnail: video.snippet.thumbnails.medium.url
      };
    });
    this.setState({
      videos: adaptedVideos,
      selectedVideo: adaptedVideos[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video }, () => {
      console.log(this.state.selectedVideo);
    });
  };

  render() {
    let content = null;
    if (this.state.selectedVideo) {
      content = (
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      );
    } else {
      content = (
        <div className="ui grid">
          <div className="column">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {content}
      </div>
    );
  }
}

export default App;
