import React, { Component } from 'react';
import { Link } from 'react-router';
import { Api, FecthUrl } from '../../../helpers/requestHelper';

import MoviesList from '../list';
if(process.env.WEBPACK) require('./index.scss');


class MovieGenre extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		// Prevent map function doesn't exist on loading
		var genres;
		if(!!this.props.genres.map){
			genres = this.props.genres.map((genre, key) => <MoviesList key={key} genreId={genre.id} genreName={genre.name} /> );
		}else{
			genres = this.props.genres;
		}

		return (

			<div className='list-movie-genre'>
				{genres}
			</div>
		);
	}
}

// Set Default Properties
MovieGenre.defaultProps = {
    genres : []

};

// Export Class
export default MovieGenre;