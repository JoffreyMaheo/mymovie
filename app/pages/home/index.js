import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Api, FecthUrl } from '../../helpers/requestHelper';
import Title, { Subtitle} from '../../components/header/title';
import MoviesList from '../../components/movies/list';
import MoviesByGenre from '../../components/movies/listByGenre';

if(process.env.WEBPACK) require('./index.scss');


class Home extends Component {

	constructor(props) {
		super(props)
		this.state = {
			genres: 'loading...'
		}
	}

	urlBuilder(){
		return Api.rootUrl + '/genre/movie/list?api_key=' + Api.key;
	}

	componentDidMount(){
		this.getGenresList();
	}

	getGenresList(){
		FecthUrl(this.urlBuilder(), (data) => {
			let genresList = data.genres.slice(0,6);

			this.setState({
	          genres: genresList
	        });
		});
	}

	render() {

		return (

			<div className='home'>

				<Title title="MY MOVIE"/>
				<Subtitle title="Popular"/>

				<MoviesList/>
				<MoviesByGenre genres={this.state.genres} />		
				
			</div>
		);
	}
}

export default Home;
