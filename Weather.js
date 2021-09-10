import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    
}

export default function Weather({ temp }) {
    return(
        <LinearGradient
        // Background Linear Gradient
            colors={['rgba(2,25,0,0.8)', 'transparent']}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name="weather-lightning-rainy"
                    size={96}
                    color="white"
                />
                <Text style={styles.temp}>{temp}o</Text>
            </View>
            <View style={styles.halfContainer}>
                
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp:propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})