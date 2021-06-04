import React, {Component} from 'react';
import {Text,View, StyleSheet, TextBase} from 'react-native';

class Ex6 extends Component {
    state = {
        texto : "Texto"
    }

    alteraTexto = () => {
        this.setState({texto : 'Seg clicado'});

    }
    render (){
        let {texto} = this.state;
        // onlongpress -> ao segurar prexionado ex uma funççao
        return(
            <View style={StyleSheet.fundo}>
                <Text onLongPress={this.alteraTexto} style={style.texto}>{texto}</Text>
            </View>
        );

    }
}
const styles = StyleSheet.create({
    fundo:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'pink'
    },
    texto:{
        fontSize:30,
        textAlign:'center',
        color:'blue'
    }
});
export default Ex6;