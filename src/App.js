import React, { Component, Fragment } from 'react';
import HeaderComponent from './Components/HeaderComponent/Header';
import YoutubeApi, { baseParams } from './Api/youtubeApi';
import VideosList from './Components/VideosComponents/VideosList';
import VideoDetails from './Components/VideosComponents/VideoDetails';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			loading: false,
			selectedVideo: null, //one selected video out of 10 videos
		};
	}
	componentDidMount() {
		this.formSubmit('aye mere');
	}
	formSubmit = async (term) => {
		let response = await YoutubeApi.get('/search', {
			params: {
				q: term,
				...baseParams,
			},
		});
		// console.log(response);
		this.setState({
			videos: response.data.items,
			loading: true,
			selectedVideo: response.data.items[0],
		});
	};
	onSelectedVideo = (video) => {
		// console.log(video);
		this.setState({ selectedVideo: video, loading: true });
	};
	render() {
		return (
			<Fragment>
				<header>
					<HeaderComponent handleFormSubmit={this.formSubmit} />
				</header>
				<main className="container-fluid my-4 pl-4 pr-4">
					<section id="data-list">
						<article>
							<div className="player_Block">
								<VideoDetails
									video={this.state.selectedVideo}
									loading={this.state.loading}
								/>
							</div>
							<div className="list-block">
								<VideosList
									videos={this.state.videos}
									onSelectVideo={this.onSelectedVideo} //handling click
								/>
							</div>
						</article>
					</section>
				</main>
			</Fragment>
		);
	}
}

export default App;
