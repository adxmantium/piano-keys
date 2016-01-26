// React - piano_component.jsx

var Piano_Component = React.createClass({
	render: function(){
		return (
			<div className="top-level-component-container">
				Testing
			</div>
		);
	}
});

ReactDOM.render( <Piano_Component />, document.getElementById('main-container') );