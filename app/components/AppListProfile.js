import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

function AppListItem({image, title, subtitle}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 37,
    },
    textContainer:{
        flexDirection: 'column',
        marginLeft: 10,
        justifyContent: 'center',
    },
    title:{
        fontSize: 20,
    },
    subtitle:{
        fontSize: 20,
    },
})

export default AppListItem;