import React from 'react'

export class Logo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			fill: 'white'
		}
	}
	render() {
		return (<svg version="1.1" x="0px" y="0px" fill={this.state.fill} viewBox="0 0 100 125" enable-background="new 0 0 100 100"><polygon points="50.284,53.022 73.318,39.661 69.868,4.953 68.492,4.953 71.091,38.892 49.515,49.169 27.938,38.892   30.538,4.953 29.161,4.953 25.711,39.661 48.746,53.022 47.408,87.317 31.563,94.941 67.466,94.941 51.621,87.317 "/></svg>)
	}
}

export class Menu extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(<svg version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100"><path d="M50,5.5C25.424,5.5,5.5,25.424,5.5,50c0,24.577,19.924,44.5,44.5,44.5c24.577,0,44.5-19.923,44.5-44.5  C94.5,25.424,74.577,5.5,50,5.5z M75.818,72.437c0,0.568-0.229,1.166-0.682,1.792c-0.457,0.625-1.062,0.938-1.822,0.938H26.684  c-1.669,0-2.502-0.909-2.502-2.729v-7.546c0-1.668,0.833-2.502,2.502-2.502h46.631c0.684,0,1.271,0.219,1.764,0.654  s0.74,1.053,0.74,1.848V72.437z M75.818,53.659c0,0.568-0.229,1.166-0.682,1.792c-0.457,0.625-1.062,0.938-1.822,0.938H26.684  c-1.669,0-2.502-0.909-2.502-2.729v-7.546c0-1.667,0.833-2.502,2.502-2.502h46.631c0.684,0,1.271,0.219,1.764,0.654  c0.492,0.437,0.74,1.053,0.74,1.848V53.659z M75.818,34.882c0,0.568-0.229,1.166-0.682,1.792c-0.457,0.625-1.062,0.938-1.822,0.938  H26.684c-1.669,0-2.502-0.909-2.502-2.729v-7.546c0-1.667,0.833-2.502,2.502-2.502h46.631c0.684,0,1.271,0.219,1.764,0.654  c0.492,0.437,0.74,1.053,0.74,1.848V34.882z"/></svg>)
	}
}

export class LogOut extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (<svg version="1.1" x="0px" y="0px" fill='white' viewBox="0 0 512 640" enable-background="new 0 0 512 512"><g><polygon points="456,456 184,456 184,352 200,352 200,440 440,440 440,72 200,72 200,160 184,160 184,56 456,56  "/></g><g><rect x="64" y="248" width="224" height="16"/></g><g><polygon points="122.343,325.657 52.687,256 122.343,186.343 133.657,197.657 75.313,256 133.657,314.343  "/></g></svg>)
	}
}