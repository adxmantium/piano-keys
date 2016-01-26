// React - piano_component.jsx

var Piano_Component = React.createClass({displayName: "Piano_Component",
	render: function(){
		return (
			React.createElement("div", {className: "top-level-component-container"}, 
				"Testing"
			)
		);
	}
});

ReactDOM.render( React.createElement(Piano_Component, null), document.getElementById('main-container') );