import React from 'react';
import	{Text,StyleSheet, View} from 'react-native';


class Ex5 extends React.Component{

    state = {
        nome: "JORGE DA BORRACHARIA"
    }

    quandoclicar = () => {
        this.setState({nome: 'borracharia do jorge'});
    }

    render(){
        let {nome} = this.state;
        return (
            <View style={styles.container}>
            <Text onPress={this.quandoclicar} style={styles.laranjado}>{nome}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center'
    },
    laranjado:{
        textAlign:'center',
        fontSize: 80,
        color : 'orange'
    }
   
});
export default Ex5;
