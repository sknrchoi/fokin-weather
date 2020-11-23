import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "5b1c00456ce47ccc903324fa901cd5e2";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({ isLoading: false, temp: data.main.temp});
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
    const { isLoading, temp }  = this.state;
    return  isLoading ? <Loading/> : <Weather temp={Math.round(temp)}/>;
  }
}
