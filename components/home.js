import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Dimensions,
} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
const { width, height } = Dimensions.get('window');

const Home = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.headerBox}>
        <Text style={styles.header}>Search - The Transition</Text>
      </View>
      <TouchableScale
        activeScale={0.9}
        tension={50}
        friction={7}
        useNativeDriver
        onPress={() => navigation.navigate('Result')}>
        <SharedElement id="searchBoxId">
          <View style={styles.searchBox}>
            <Text style={styles.searchPlaceHolder}>Transition 1 - shared</Text>
          </View>
        </SharedElement>
      </TouchableScale>
      <TouchableScale
        activeScale={0.9}
        tension={50}
        friction={7}
        useNativeDriver
        onPress={() => navigation.navigate('Result2')}>
        <View style={styles.searchBox}>
          <Text style={styles.searchPlaceHolder}>Transition 2 - animated</Text>
        </View>
      </TouchableScale>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 250,
  },
  headerBox: {
    width: '100%',
  },
  header: {
    fontSize: 32,
    textAlign: 'center',
  },
  searchBox: {
    height: 60,
    width: width - 20,
    borderColor: '#999',
    borderWidth: 1,
    margin: 10,
    borderRadius: 15,
  },
  searchPlaceHolder: {
    color: '#666',
    fontWeight: '600',
    fontSize: 24,
    margin: 15,
  },
});

export default Home;
