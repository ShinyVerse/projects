import React from 'react';
import VideoListItem from './VideoListItem.js'

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
       <VideoListItem
         onVideoSelect={props.onVideoSelect}
         key={video.etag}
         video={video} />
     );
  });
  console.log(videoItems);
  //imagine from props we get:
  //const videos = props.videos; << array of videos
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
      {/*  {props.videos.length} //If changed from a function based component to a class based
      //we would need to change props.videos.length to this.props.videos.length */}
    </ul>
  );
}

export default VideoList;
