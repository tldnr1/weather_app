import React from 'react';
import { Alert } from 'react-native';
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { 
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync({ accuracy:Location.Accuracy.High });
      console.log(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}