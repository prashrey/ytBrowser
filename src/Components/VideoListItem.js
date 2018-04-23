import React from 'react';

const VideoListItem = (props) => {
    const Video = props.video;
    const imageUrl = Video.snippet.thumbnails.default.url;
    
    //console.log(Video);
    return (
        <li onClick={() => props.onVideoSelect(Video)}  className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} className="media-object" />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {Video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;