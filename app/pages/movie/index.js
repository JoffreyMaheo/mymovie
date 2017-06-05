import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Api, FecthUrl } from '../../helpers/requestHelper';
import Title, { Subtitle} from '../../components/header/title';

import MovieItem from '../../components/movies/item';

if(process.env.WEBPACK) require('./index.scss');


class Genres extends Component {

	constructor(props) {
		super(props)
	}

	render() {

		return (
			<div className='home'>
				<Title title="MY MOVIE"/>

				<MovieItem movieId={this.props.params.id} />
				
			</div>
		);
	}
}

export default Genres;
