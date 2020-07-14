import React from 'react';

class VideoDetail extends React.Component {
  render() {
    const { video } = this.props;

    if (!video) {
      return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id}`;

    return (
      <div>
        <div className="ui segment">
          <div className="ui embed">
            <iframe title="Video player" src={videoSrc} />
          </div>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.title}</h4>
          <p>{video.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
