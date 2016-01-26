// React - piano_component.jsx

var B_Key = React.createClass({displayName: "B_Key",
	render: function(){
		return (
			React.createElement("div", {className: "key b-key"}, 
				"B"
			)
		);
	}
});

var A_Key = React.createClass({displayName: "A_Key",
	render: function(){
		return (
			React.createElement("div", {className: "key a-key"}, 
				"A"
			)
		);
	}
});

var G_Key = React.createClass({displayName: "G_Key",
	render: function(){
		return (
			React.createElement("div", {className: "key g-key"}, 
				"G"
			)
		);
	}
});

var F_Key = React.createClass({displayName: "F_Key",
	render: function(){
		return (
			React.createElement("div", {className: "key f-key"}, 
				"F"
			)
		);
	}
});

var E_Key = React.createClass({displayName: "E_Key",
	render: function(){
		return (
			React.createElement("div", {className: "key e-key"}, 
				"E"
			)
		);
	}
});

var D_Key = React.createClass({displayName: "D_Key",
	render: function(){
		return (
			React.createElement("div", {className: "key d-key"}, 
				"D"
			)
		);
	}
});

var White_Key = React.createClass({displayName: "White_Key",
	render: function(){
		return (
			React.createElement("div", {className: this.props.css}, 
				"C"
			)
		);
	}
});

var Black_Key = React.createClass({displayName: "Black_Key",
	render: function(){
		return (
			React.createElement("div", {className: "black-key"}

			)
		);
	}
});

var Piano_Component = React.createClass({displayName: "Piano_Component",
	render: function(){
		return (
			React.createElement("div", {className: "piano"}, 
				React.createElement(White_Key, {css: 'key c-key text-center'}), 
				React.createElement(White_Key, {css: 'key d-key text-center'}), 
				React.createElement(White_Key, {css: 'key e-key text-center'}), 
				React.createElement(White_Key, {css: 'key f-key text-center'}), 
				React.createElement(White_Key, {css: 'key g-key text-center'}), 
				React.createElement(White_Key, {css: 'key a-key text-center'}), 
				React.createElement(White_Key, {css: 'key b-key text-center'})
			)
		);
	}
});

ReactDOM.render( React.createElement(Piano_Component, null), document.getElementById('main-container') );