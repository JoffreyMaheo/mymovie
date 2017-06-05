import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Api, FecthUrl } from '../../helpers/requestHelper';
import Title, { Subtitle} from '../../components/header/title';

import MoviesList from '../../components/movies/list';

if(process.env.WEBPACK) require('./index.scss');


class Genres extends Component {

	constructor(props) {
		super(props)
		this.state = {
			genre: 'loading...'
		}
	}

	urlBuilder(){
		return Api.rootUrl + '/genre/' +this.props.params.id+ '?api_key=' + Api.key;
	}

	componentDidMount(){
		this.getGenre();
	}

	getGenre(){
		FecthUrl(this.urlBuilder(), (data) => {
			this.setState({
	          genre: data
	        });
		});
	}


	render() {
		return (
			<div className='home'>

				<Title title="MY MOVIE"/>
				<MoviesList genreId={this.state.genre.id} genreName={this.state.genre.name} page={this.props.params.page} isPage={true} />
				
			</div>
		);
	}
}

export default Genres;
