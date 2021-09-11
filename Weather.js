import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#182848", "#4b6cb7"],
        title: "Thunderstorm",
        subtitle: "sub of Thunderstorm"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#5B86E5", "#36D1DC"],
        title: "Drizzle",
        subtitle: "sub of Drizzle"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#2B32B2", "#1488CC"],
        title: "Rain",
        subtitle: "sub of "
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#6190E8", "#A7BFE8"],
        title: "Snow",
        subtitle: "sub of Snow"
    },
    Atmosphere: {
        iconName: "weather-windy-variant",
        gradient: ["#4CA1AF", "#C4E0E5"],
        title: "Atmosphere",
        subtitle: "sub of Atmosphere"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#EDE574", "#E1F5C4"],
        title: "Clear",
        subtitle: "sub of Clear"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#757F9A", "#D7DDE8"],
        title: "Clouds",
        subtitle: "sub of Clouds"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "sub of Haze"
    }
}

export default function Weather({ temp, condition }) {
    return(
        <LinearGradient
        // Background Linear Gradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={weatherOptions[condition].iconName}
                    size={96}
                    color="white"
                />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
        "Clouds",
        "Haze"
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
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 30
    },
    textContainer: {
        alignItems: "flex-start"
    }
})