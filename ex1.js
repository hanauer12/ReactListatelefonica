import React, {Component} from 'react';
import	{Text, View} from 'react-native';


class ex1 extends Component {
	
	state = {
		nome:"sabonete lux",
        peso : 90,
	}
	

    constructor(props){
		super(props);
	}

    render(){
		let {nome,peso} = this.state;
		return(
		<Text>{nome} {peso}G</Text>
        
	  );
	}
}
export default ex1;