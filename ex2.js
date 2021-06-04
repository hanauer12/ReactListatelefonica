import React, {Component} from 'react';
import	{Text, View} from 'react-native';


class ex2 extends Component {
	
	state = {
		automovel:"FORD FUSION",
        vel : 0,
	}
    constructor(props){
		super(props);
	}

    componentDidMount(){
     
        this.setState({vel:'100'});
	}

    render(){
		let {automovel,vel} = this.state;
		return(
		<Text>{automovel} {vel} km/h</Text>
        
	  );
	}
}
export default ex2;