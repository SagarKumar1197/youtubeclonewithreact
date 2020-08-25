import React, { Component, Fragment } from 'react';
import './Header.styles.css';
import SearchComponent from '../SearchComponent/Search';

class HeaderComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Fragment>
				<section className="headerBlock">
					<article>
						<div>
							<i className="far fa-bars bars"></i>
						</div>
						<div className="logo">
							<img src="./ytlogo.jpg" alt="logo" />
						</div>
						<div className="search">
							<SearchComponent HeaderFormProps={this.props.handleFormSubmit} />
						</div>

						<div className="menuBlock">
							<section
								className="video_and_menuicons"
								style={{ display: 'flex' }}
							>
								<div className="videoPostBlock">
									<i className="fas fa-video-plus"></i>
								</div>
								<div className="youtubeAppsBlock">
									<i className="fas fa-th"></i>
								</div>
								<div className="notificationBlock">
									<i className="fas fa-bell"></i>
								</div>
								<div className="loginBlock">
									<i className="fas fa-user-circle"></i>
								</div>
							</section>
						</div>
					</article>
				</section>
			</Fragment>
		);
	}
}

export default HeaderComponent;
