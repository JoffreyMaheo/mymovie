import React, { Component } from 'react';
import { Link } from 'react-router';
import { Api, FecthUrl } from '../../../helpers/requestHelper';
import { getNumberArray } from '../../../helpers/Utils';
import Title, { Subtitle } from '../../header/title';

if(process.env.WEBPACK) require('./index.scss');


class MovieList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			listItems: 'loading...'
		}
	}

	urlBuilder(){
		return Api.rootUrl + this.props.path + '?api_key=' + Api.key + '&with_genres=' + this.props.genreId + '&page=' +this.props.page+ '&sort_by=' + this.props.sortBy;
	}

	componentDidMount(){
		this.getItems();
	}

	getItems(){

		FecthUrl(this.urlBuilder(), (data) => {
			let listItems = data.results.map((item) =>

		  		<li key={item.id}>
		  			<Link to={'/movie/' + item.id}>
						{item.title}
					</Link>
		  		</li>
			);

			this.setState({
	          listItems: listItems
	        });

		});
	}

	linkBuilder(){
		var link;

		if(this.props.isPage){
			link = <Link to='/'>Return to home</Link>;
		}else{
			link = <Link to={'/genres/' + this.props.genreId } >See all {this.props.genreName} movies</Link>;
		}

		return link;
	}

	navBuilder(pageNumber){

		var length = 10;
		var begin = (pageNumber <= length/2) ? 1 : pageNumber-length/2;
		var arr = getNumberArray(begin, length);

		return arr;
	}

	render() {
		var link, title;

		if(this.props.genreId != ''){
			link = this.linkBuilder()
			title = <Subtitle title={this.props.genreName} />;
		}

		return (
			<div className={'list-movie' + (this.props.genreId != '' ? ' list-movie--' + this.props.genreId : '')}>
				{title}
				<ul>{this.state.listItems}</ul>
				{link}
			</div>
		);
	}
}

// Set Default Properties
MovieList.defaultProps = {
    path: '/discover/movie',
    genreId: '',
    genreName : '',
    page : '1',
    sortBy: 'popularity.desc'

};

// Export Class
export default MovieList;