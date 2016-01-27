// React - piano_component.jsx



// ----- top level app component
var App_Component = React.createClass({
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
			<div className="app-container">

				<h1 className="text-center">Piano<small>Keys</small></h1>

				<Piano click={this.keyPressed} />

				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-2 col-md-4 col-lg-3 col-lg-offset-3">
							<Autoplay autoplay={this.autoplay} />
						</div>

						<div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-4 col-lg-3">
							<KeyLog keys={this.state.keyLog} />
						</div>

						<div className="clearfix"></div>
					</div>
				</div>

			</div>
		);
	}
});
// ----- top level app component



// ----- Piano and piano key components
var Piano = React.createClass({
	render: function(){
		return (
			<div className="piano">
				<White_Key css={'key c-key text-center'} text={'C'} click={this.props.click} />
				<White_Key css={'key d-key text-center'} text={'D'} click={this.props.click} />
				<White_Key css={'key e-key text-center'} text={'E'} click={this.props.click} />
				<White_Key css={'key f-key text-center'} text={'F'} click={this.props.click} />
				<White_Key css={'key g-key text-center'} text={'G'} click={this.props.click} />
				<White_Key css={'key a-key text-center'} text={'A'} click={this.props.click} />
				<White_Key css={'key b-key text-center'} text={'B'} click={this.props.click} />
				<Black_Key css={'black-keys cd-key'} />
				<Black_Key css={'black-keys de-key'} />
				<Black_Key css={'black-keys fg-key'} />
				<Black_Key css={'black-keys ga-key'} />
				<Black_Key css={'black-keys ab-key'} />
			</div>
		);
	}
});

var White_Key = React.createClass({
	setActive: function(e){
		var elem = $(e.target);
		elem.addClass('active');
		this.props.click(elem.text());
	},

	render: function(){
		return (
			<div className={this.props.css} onClick={this.setActive}>
				{this.props.text}
			</div>
		);
	}
});

var Black_Key = React.createClass({
	render: function(){
		return <div className={this.props.css}></div>;
	}
});
// ----- Piano and piano key components



// ----- Log and log item components
var KeyLog = React.createClass({
	render: function(){
		return (
			<div className="log">
				<h4>Key Log ({this.props.keys.length})</h4>
				{
					this.props.keys.length > 0 ?
					this.props.keys.map(function(val, index, arr){
						return <LogItem key={index} text={val} css={val+'-color item'} />
					}) :
					<div><small>Nothing to log</small></div>
				}
			</div>
		);
	}
});

var LogItem = React.createClass({
	render: function(){
		return (
			<div className={this.props.css}>
				{this.props.text}
			</div>
		);
	}
});
// ----- Log and log item components



// ----- Autoplay component
var Autoplay = React.createClass({
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
			<div className="autoplay">
				<h4>Autoplay</h4>
				<form onSubmit={this.play} className="form-inline">
					<div className="input-group">
						<input type="text" className="key-input form-control" placeholder="Enter keys to play" />
						<div className="play-btn input-group-addon" onClick={this.play}>Play</div>
					</div>
				</form>
			</div>
		);
	}
});
// ----- Autoplay component



ReactDOM.render( <App_Component />, document.getElementById('main-container') );