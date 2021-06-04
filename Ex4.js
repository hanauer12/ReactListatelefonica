import React, {Component} from 'react';
import	{Text,StyleSheet, View} from 'react-native';


class Ex4 extends React.Component{

    state={
        vermelho:true

    }

    quandoclicar = () => {
        let {vermelho} = this.state;
        this.setState({vermelho:!vermelho});
    }

    render(){
        let {vermelho} = this.state;
        //onPress - ao clica executa uma função 
        //variavel == true ? se : else
        //para usar mais de um estilo para mais de um componete deve ser colocado cada estido dentro de [] separados por , 
        return (
            <View style={styles .container}>
            <Text onPress={this.quandoclicar} style={[styles.nome,(vermelho?styles.vermelho:{})]}>Renato Hanauer</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center'
    },
    nome:{
        textAlign:'center',
        fontSize: 80,
        color : 'blue'
    },
    vermelho:{
        color : 'red'
    }
})
export default Ex4;
