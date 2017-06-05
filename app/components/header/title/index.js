import React, { Component } from 'react';

export default class Title extends Component {
	render () {
		const { props } = this;

		return (
			<h1 {...props}>{props.title}</h1>
		);
	}
}

export class Subtitle extends Component {
	render () {
		const { props } = this;

		return (
			<h3 {...props}>{props.title}</h3>
		);
	}
}
