import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component {
  render() {
    const { video, onVideoSelect } = this.props;
    return (
      <div className="item video-item" onClick={() => onVideoSelect(video)}>
        <img className="ui image" src={video.thumbnail} alt={video.title} />
        <div className="content">
          <div className="header">{video.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
