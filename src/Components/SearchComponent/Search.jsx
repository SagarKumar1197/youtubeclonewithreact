import React, { Component, Fragment } from 'react';
import './Search.styles.css';

class SearchComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
	}
	handleChange = (e) => {
		this.setState({ term: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.HeaderFormProps(this.state.term);
	};
	render() {
		// console.log(this.props);
		return (
			<Fragment>
				<div className="searchBlock">
					<section>
						<form id="form" onSubmit={this.handleSubmit}>
							<div className="ui action input searchInput">
								<input
									type="text"
									placeholder="Search..."
									value={this.state.term}
									onChange={this.handleChange}
								/>
								<button className="ui button">
									<i className="far fa-search"></i>
								</button>
							</div>
						</form>
					</section>
				</div>
			</Fragment>
		);
	}
}

export default SearchComponent;
