import React, {Component} from 'react';
import {View,TextInput, Button,Text, TouchableOpacity, Touchable} from 'react-native';
import Style from './Style';

class Cadastro extends Component{

  state={
    inputValor:null
  }

    getValor = (valor) => {
      this.setState({inputValor:valor})
    }

    aoClicar = () => {
      let{inputValor} = this.state;
      console.log(inputValor);
    }

    render(){
		return(
            <View>

            {/* style -> estilos do campo*/}
            {/* placeholder -> funçao pre definida do textinput que executa
            alog quando o valor do campo e alterado (nesse caso, chama a funcao
            this,getvalor)*/}
          
		        <Text>Cadastro</Text>
            <TextInput
            style={Style.input}
            placeholder={'Nome do contato'}
            onChangeText={this.getValor}/>

            <Button
              title={"Clica aqui"}
              color= {'#2196F3'}
              onPress={this.aoClicar}/>

            <TouchableOpacity style={Style.botao}
            onPress={this.aoClicar}
            activeOpacity={0.5}>
            <Text style={Style.botaoText}>Piscante</Text>

            </TouchableOpacity>
            </View>
            );
        }
     }

export default Cadastro;