import React from 'react';
import './videos.styles.css';
//manipulate date
import Moment from 'react-moment';
import 'moment-timezone';
function VideoIitems({ video, onSelect }) {
	// console.log(onSelect);
	// console.log(video.snippet.title);
	return (
		<div>
			<div className="videoList" onClick={() => onSelect(video)}>
				<div className="videoBlocks_img">
					<img
						src={video.snippet.thumbnails.medium.url}
						alt={video.snippet.title}
					/>
				</div>
				<div className="videoBlocks_description">
					<h1>{video.snippet.title}</h1>
					<p className="channel_title">
						{video.snippet.channelTitle}
						<span>
							<Moment fromNow ago>
								{video.snippet.publishTime}
							</Moment>
							<span style={{ margin: '0px 5px' }}>ago</span>
						</span>
					</p>
					{/* <span>
					<Moment fromNow ago>
						{video.snippet.publishedAt}
					</Moment>
				</span> */}
					{/* <p className="description">{video.snippet.description}</p> */}
				</div>
			</div>
		</div>
	);
}

export default VideoIitems;
