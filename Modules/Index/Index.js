import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Navigator from '../../Navigator/Navegator';
import styles from './Style';


class Index extends Component {
    render(){
        return(
                <View style={styles.container}>
                <Navigator/>
            </View>
        );
    }
}

export default Index;