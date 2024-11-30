import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnalogClock from 'react-native-clock-analog';

const nowDate = () => {
  const d = new Date();
  let second = d.getSeconds();
  let minute = d.getMinutes();
  let hour = d.getHours();
  return { second, minute, hour };
};

const nowTimer = () => {
  const { second, minute, hour } = nowDate();
  const [state, setState] = useState({
    second,
    minute,
    hour,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const { second, minute, hour } = nowDate();
      setState({ second, minute, hour });
    }, 1000);
    
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return state;
};

export default function App() {
  const { second, minute, hour } = nowTimer();

  return (
    <View style={styles.container}>
      <AnalogClock
        colorClock="#FFECE4"
        colorNumber="#000000"
        colorCenter="#00BCD4"
        colorHour="#FF8F00"
        colorMinutes="#FFC400"
        hour={hour}
        minutes={minute}
        seconds={second}
        showSeconds
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:220,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6E6E6',
    // backgroundColor:"red",
    padding: 8,
  },
});
