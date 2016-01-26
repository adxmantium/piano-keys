// React - piano_component.jsx

var B_Key = React.createClass({
	render: function(){
		return (
			<div className="key b-key">
				B
			</div>
		);
	}
});

var A_Key = React.createClass({
	render: function(){
		return (
			<div className="key a-key">
				A
			</div>
		);
	}
});

var G_Key = React.createClass({
	render: function(){
		return (
			<div className="key g-key">
				G
			</div>
		);
	}
});

var F_Key = React.createClass({
	render: function(){
		return (
			<div className="key f-key">
				F
			</div>
		);
	}
});

var E_Key = React.createClass({
	render: function(){
		return (
			<div className="key e-key">
				E
			</div>
		);
	}
});

var D_Key = React.createClass({
	render: function(){
		return (
			<div className="key d-key">
				D
			</div>
		);
	}
});

var White_Key = React.createClass({
	render: function(){
		return (
			<div className={this.props.css}>
				C
			</div>
		);
	}
});

var Black_Key = React.createClass({
	render: function(){
		return (
			<div className="black-key">

			</div>
		);
	}
});

var Piano_Component = React.createClass({
	render: function(){
		return (
			<div className="piano">
				<White_Key css={'key c-key text-center'} />
				<White_Key css={'key d-key text-center'} />
				<White_Key css={'key e-key text-center'} />
				<White_Key css={'key f-key text-center'} />
				<White_Key css={'key g-key text-center'} />
				<White_Key css={'key a-key text-center'} />
				<White_Key css={'key b-key text-center'} />
			</div>
		);
	}
});

ReactDOM.render( <Piano_Component />, document.getElementById('main-container') );