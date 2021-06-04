import React, {Component} from 'react';
import	{Text, View,StyleSheet} from 'react-native';
//import { Component } from 'react';


const styles = StyleSheet.create({
    container:{
       flex :1,
       padding: 24,
       backgroundColor: "#eaeaea" 
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
});

class Ex3 extends Component {

render(){
    return(
    <View style = {styles.container}>
        <Text style={styles.title}>React Native</Text>
        <Text style={styles.title}>React Native</Text>
    </View>

);
}
}

export default Ex3;
