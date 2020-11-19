import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "5b1c00456ce47ccc903324fa901cd5e2";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    );
    console.log(data);
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: {location, longitude}
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false});
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
    console.log(location);
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    // bridge for native core
    const { isLoading }  = this.state;
    return  isLoading ? <Loading/> : null;
  }
}
