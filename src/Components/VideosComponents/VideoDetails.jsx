import React, { Fragment } from 'react';

function VideoDetails({ video, loading }) {
	console.log(video);
	if (!video) {
		return 'loading...';
	}

	let videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
	return (
		<Fragment>
			<div>
				<iframe
					width="100%"
					height="500"
					src={videoUrl}
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				/>
				<h1>{video.snippet.title}</h1>
				<p>{video.snippet.description}</p>
			</div>
		</Fragment>
	);
}

export default VideoDetails;
