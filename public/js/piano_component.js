// React - piano_component.jsx



// ----- top level app component
var App_Component = React.createClass({displayName: "App_Component",
	getInitialState: function(){
		return {
			keyLog: [],
		};
	},

	keyPressed: function(key){
		this.addToLog(key);
	},

	addToLog: function(key){
		console.log(this.state.keyLog);
		this.state.keyLog.push(key);
		this.setState({keyLog: this.state.keyLog});
	},

	autoplay: function(string_of_keys){
		console.log( 'in autoplay function' );
		var elem;

		for( var a = 0; a < string_of_keys.length; a++ ){
			elem = $('.'+string_of_keys[a]+'-key');
			// this.play( elem );
			elem.addClass('active').delay(1000).queue(function(){
				elem.removeClass('active').dequeue();
			});
		}
	},

	play: function(elem){
		setTimeout(function(){
			console.log(elem);
			elem.css('text-decoration', 'underline');
		}, 1000);

		console.log('do i get here');
		elem.css('text-decoration', 'none');
	},

	render: function(){
		return (
			React.createElement("div", {className: "app-container"}, 

				React.createElement("h1", {className: "text-center"}, "Piano", React.createElement("small", null, "Keys")), 

				React.createElement(Piano, {click: this.keyPressed}), 

				React.createElement("div", {className: "container-fluid"}, 
					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-2 col-md-4 col-lg-3 col-lg-offset-3"}, 
							React.createElement(Autoplay, {autoplay: this.autoplay})
						), 

						React.createElement("div", {className: "col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-4 col-lg-3"}, 
							React.createElement(KeyLog, {keys: this.state.keyLog})
						), 

						React.createElement("div", {className: "clearfix"})
					)
				), 

				React.createElement("div", {className: "text-center copyright"}, React.createElement("small", null,  String.fromCharCode(169) + ' 2016 Adam Adams'))

			)
		);
	}
});
// ----- top level app component



// ----- Piano and piano key components
var Piano = React.createClass({displayName: "Piano",
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

var White_Key = React.createClass({displayName: "White_Key",
	setActive: function(e){
		var elem = $(e.target);
		elem.addClass('active');
		this.props.click(elem.text());
	},

	render: function(){
		return (
			React.createElement("div", {className: this.props.css, onClick: this.setActive}, 
				this.props.text
			)
		);
	}
});

var Black_Key = React.createClass({displayName: "Black_Key",
	render: function(){
		return React.createElement("div", {className: this.props.css});
	}
});
// ----- Piano and piano key components



// ----- Log and log item components
var KeyLog = React.createClass({displayName: "KeyLog",
	render: function(){
		return (
			React.createElement("div", {className: "log"}, 
				React.createElement("h4", null, "Key Log (", this.props.keys.length, ")"), 
				
					this.props.keys.length > 0 ?
					this.props.keys.map(function(val, index, arr){
						return React.createElement(LogItem, {key: index, text: val, css: val+'-color item'})
					}) :
					React.createElement("div", null, React.createElement("small", null, "Nothing to log"))
				
			)
		);
	}
});

var LogItem = React.createClass({displayName: "LogItem",
	render: function(){
		return (
			React.createElement("div", {className: this.props.css}, 
				this.props.text
			)
		);
	}
});
// ----- Log and log item components



// ----- Autoplay component
var Autoplay = React.createClass({displayName: "Autoplay",
	play: function(e){
		var val, is_valid;

		e.preventDefault();

		val = $('.key-input').val();
		is_valid = this.validate( val );

		if( is_valid ){
			val = val.split(',');
			this.props.autoplay( val );
		}
	},

	validate: function(submitted){
		var valid_chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 
			match = false, valid = true;

		submitted = submitted.split(',');

		for( var i = 0; i < submitted.length; i++ ){
			if( submitted[i].length > 1 || submitted[i].length === 0 ){
				return false;
			}else{
				for( var k = 0; k < valid_chars.length; k++ ){
					if( valid_chars[k] === submitted[i] ){
						match = true;
						break;
					}
				}

				if( !match ){
					return false;
				}
			}
		}

		return valid;
	},

	render: function(){
		return (
			React.createElement("div", {className: "autoplay"}, 
				React.createElement("h4", null, "Autoplay"), 
				React.createElement("form", {onSubmit: this.play, className: "form-inline"}, 
					React.createElement("div", {className: "input-group"}, 
						React.createElement("input", {type: "text", className: "key-input form-control", placeholder: "Enter keys to play"}), 
						React.createElement("div", {className: "play-btn input-group-addon", onClick: this.play}, "Play")
					)
				)
			)
		);
	}
});
// ----- Autoplay component



ReactDOM.render( React.createElement(App_Component, null), document.getElementById('main-container') );