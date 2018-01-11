import React from 'react';

const VideoListItem = ({video, onVideoSelect }) => {
  const imageURL = video.snippet.thumbnails.default.url;
  const titleURL = video.snippet.title;
  // ({video}) is identical to having (props) and then
  // writing within the expression: const video = props.video; ES6 code ^
  console.log(video);
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageURL} className="media-object"/>
        </div>

        <div className="media-body">
          <div className="media-heading">{titleURL}</div>
        </div>
      </div>

    </li>
  );
};

export default VideoListItem
