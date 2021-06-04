import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 

//telas/componente
import Contatos from '../Modules/Contatos/Contatos';
import Cadastro from '../Modules/Cadastro/Cadastro';
import Detalhes from '../Modules/Detalhes/Detalhes';
const Stack = createStackNavigator();

const Navigator = () => {
    //container geral das rotas de navegação
  return (
    <NavigationContainer>
        {/*Utilizando o componete de navegaçao STACK */}
        {/*screenOptions -> conf padrao para todos as telas do stack*/}
        {/*initialRouteName -> define a tela inicial da aplicacao  */}
            <Stack.Navigator screenOptions={{}} initialRouteName={'Cadastro'}>
                {/* Criando as tela de pilha*/}
                {/* options -> conf para a tela em questão*/  }
               <Stack.Screen options={optionsContato} name={'Contatos'} component={Contatos}/> 
               <Stack.Screen  name={'Cadastro'} component={Cadastro}/>
               <Stack.Screen  name={'Detalhes'} component={Detalhes}/>

            </Stack.Navigator>
    </NavigationContainer>
  );
}
//conf da tela contato
const optionsContato = {
    headerShown:true,
    headerStyle:{
        backgroundColor:'blue',
    },
    headerTitleStyle:{
        color : 'red',
    },
    
}

export default Navigator;