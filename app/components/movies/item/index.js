import React, { Component } from 'react';
import { Link } from 'react-router';
import Title, { Subtitle } from '../../header/title';
import { Api, FecthUrl } from '../../../helpers/requestHelper';

if(process.env.WEBPACK) require('./index.scss');


class Movie extends Component {

	constructor(props) {
		super(props)
		this.state = {
			movie: 'loading...'
		}
	}

	urlBuilder(){
		return Api.rootUrl + '/movie/' +this.props.movieId+ '?api_key=' + Api.key;
	}

	componentDidMount(){
		this.getMovie();
	}

	getMovie(){

		FecthUrl(this.urlBuilder(), (data) => {

			let movie = <div key={data.id}>
				<Subtitle title={data.title} />
				<p>{data.overview}</p>
			</div>;

			this.setState({
	          movie: movie
	        });

		});
	}

	render() {
		return (
			<div className='page'>

				{this.state.movie}

				<Link to='/'>
					Go to home
				</Link>
			</div>
		);
	}
}


// Export Class
export default Movie;
	

