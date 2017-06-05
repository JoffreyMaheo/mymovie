import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './pages/home';
import Genres from './pages/genres';
import Movie from './pages/movie';

export default (
	<Route path='/'>
		<IndexRoute component={Home} />
		<Route path='genres(/:id)(/page/:page)' component={Genres} />
		<Route path='movie/:id' component={Movie} />
	</Route>
);
