import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Slider from '@react-native-community/slider';
const {width, height} = Dimensions.get('window');

const Filter = ({navigation}) => {
  let [sliderValue, setSliderValue] = useState(0);
  handleValueChange = (value) => {
    setSliderValue(value);
  };
  return (
    <View style={styles.main}>
      <View style={styles.sliderBox}>
        <Text style={styles.minmax}>0</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1000}
          step={100}
          minimumTrackTintColor="#FF00FF"
          maximumTrackTintColor="#000000"
          onValueChange={(value) => handleValueChange(value)}
        />
        <Text style={styles.minmax}>1000</Text>
      </View>
      <Text style={styles.sliderVal}>Slider Value : {sliderValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: width,
  },
  sliderBox: {
    marginTop: 100,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    width: width - 70,
    justifyContent: 'center',
    height: 200,
  },
  slider: {
    width: width - 150,
    height: 40,
  },
  minmax: {
    fontSize: 16,
    color: '#000',
    minWidth: 15,
    height: 40,
  },
  sliderVal: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default Filter;
