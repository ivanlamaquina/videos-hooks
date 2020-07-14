import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
  render() {
    if (this.props.videos.length === 0) {
      return <div></div>;
    }
    const renderedList = this.props.videos.map((video) => {
      return (
        <VideoItem
          key={video.id}
          video={video}
          onVideoSelect={this.props.onVideoSelect}
        />
      );
    });
    return (
      <div className="ui segment">
        <div className="ui relaxed divided list">{renderedList}</div>
      </div>
    );
  }
}

export default VideoList;
