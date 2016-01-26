// React - piano_component.jsx



// ----- Log and log item components
var LogItem = React.createClass({
	render: function(){
		return (
			<div className="item">
				{this.props.text}
			</div>
		);
	}
});

var KeyLog = React.createClass({
	render: function(){
		return (
			<div className="log">
				<h3>Key Log</h3>
				{
					this.props.keys.length > 0 ?
					this.props.keys.map(function(val, index, arr){
						return <LogItem key={index} text={val} />
					}) :
					null
				}
			</div>
		);
	}
});
// ----- Log and log item components



// ----- Piano and piano key components
var White_Key = React.createClass({
	render: function(){
		return (
			<div className={this.props.css} onClick={this.props.click}>
				{this.props.text}
			</div>
		);
	}
});

var Black_Key = React.createClass({
	render: function(){
		return (
			<div className={this.props.css}>

			</div>
		);
	}
});

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
// ----- Piano and piano key components



// ----- top level app component
var App_Component = React.createClass({
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
			<div className="app-container">
				<Piano click={this.keyPressed} />
				<KeyLog keys={this.state.keyLog} />
			</div>
		);
	}
});

ReactDOM.render( <App_Component />, document.getElementById('main-container') );