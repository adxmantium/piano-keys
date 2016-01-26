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
			React.createElement("div", {className: this.props.css, onClick: this.props.click}, 
				this.props.text
			)
		);
	}
});

var Black_Key = React.createClass({displayName: "Black_Key",
	render: function(){
		return (
			React.createElement("div", {className: this.props.css}

			)
		);
	}
});

var LogItem = React.createClass({displayName: "LogItem",
	render: function(){
		return (
			React.createElement("div", {className: "item"}, 
				this.props.text
			)
		);
	}
});

var KeyLog_Component = React.createClass({displayName: "KeyLog_Component",
	componentWillMount: function(){

	},

	render: function(){
		return (
			React.createElement("div", {className: "log"}, 
				React.createElement("h3", null, "Key Log"), 
				
					this.props.keys.length > 0 ?
					this.props.keys.map(function(val, index, arr){
						return React.createElement(LogItem, {key: index, text: val})
					}) :
					null
				
			)
		);
	}
});

var Piano_Component = React.createClass({displayName: "Piano_Component",
	render: function(){
		return (
			React.createElement("div", {className: "piano"}, 
				React.createElement(White_Key, {css: 'key c-key text-center', text: 'C', click: this.props.click}), 
				React.createElement(White_Key, {css: 'key d-key text-center', text: 'D', click: this.props.click}), 
				React.createElement(White_Key, {css: 'key e-key text-center', text: 'E', click: this.props.click}), 
				React.createElement(White_Key, {css: 'key f-key text-center', text: 'F', click: this.props.click}), 
				React.createElement(White_Key, {css: 'key g-key text-center', text: 'G', click: this.props.click}), 
				React.createElement(White_Key, {css: 'key a-key text-center', text: 'A', click: this.props.click}), 
				React.createElement(White_Key, {css: 'key b-key text-center', text: 'B', click: this.props.click}), 
				React.createElement(Black_Key, {css: 'black-keys cd-key'}), 
				React.createElement(Black_Key, {css: 'black-keys de-key'}), 
				React.createElement(Black_Key, {css: 'black-keys fg-key'}), 
				React.createElement(Black_Key, {css: 'black-keys ga-key'}), 
				React.createElement(Black_Key, {css: 'black-keys ab-key'})
			)
		);
	}
});

var App_Component = React.createClass({displayName: "App_Component",
	getInitialState: function(){
		return {
			keyLog: [],
		};
	},

	keyPressed: function(e){
		this.addToLog( $(e.target).text() );
	},

	addToLog: function(key){
		console.log(this.state.keyLog);
		this.state.keyLog.push(key);
		this.setState({keyLog: this.state.keyLog});
	},

	autoplay: function(){

	},

	render: function(){
		return (
			React.createElement("div", {className: "app-container"}, 
				React.createElement(Piano_Component, {click: this.keyPressed}), 
				React.createElement(KeyLog_Component, {keys: this.state.keyLog})
			)
		);
	}
});

ReactDOM.render( React.createElement(App_Component, null), document.getElementById('main-container') );