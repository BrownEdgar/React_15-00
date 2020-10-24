import React from 'react';
class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error, info) {
		console.log(error.message);
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1> Oops!!! Broken </h1>;
		}
		return this.props.children;
	}
} 
export default ErrorBoundary;