import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import AppColors from '../config/AppColors';

function AppScreen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: AppColors.bColor,
    }
});

export default AppScreen;