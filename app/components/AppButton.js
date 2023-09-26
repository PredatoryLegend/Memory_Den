import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';

import AppColors from '../config/AppColors';
import AppText from './AppText';

function AppButton({title, color='aColor', width=150, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, {backgroundColor: AppColors[color]}, {width}]}>
                <AppText style={styles.text}> {title} </AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: AppColors.aColor,
        borderRadius: 20,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text:{
        color: AppColors.black,
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default AppButton;