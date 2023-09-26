import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppColors from '../config/AppColors';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={25}/>}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.aColor,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        padding: 10,
        marginVertical: 10,
        width: '100%',
    },
    textInput:{
        fontSize: 20,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir-Roman",
        color: 'black',
        marginLeft: 10,
        flex: 1,
    },
})

export default AppTextInput;