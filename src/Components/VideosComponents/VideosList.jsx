import React from 'react';
import VideoIitems from './VideoIitems';

function VideosList({ videos, onSelectVideo }) {
	// console.log(videos);
	// console.log(onSelectVideo);
	const renderVideos = videos.map((video) => {
		return (
			<VideoIitems
				video={video}
				key={video.id.videoId}
				onSelect={onSelectVideo}
			/>
		);
	});
	return (
		<div>
			<h1>{renderVideos}</h1>
		</div>
	);
}

export default VideosList;
