import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
// import { ExpoConfigView } from '@expo/samples';

export default function SettingsScreen() {

  return (
    <ScrollView style={styles.container}>

      <Image style={styles.image} source={require('../assets/images/fundacliulogo.jpeg')} />

      <View>
        <Text style={styles.textCenter}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, cumque unde consequuntur nesciunt error maiores inventore in laboriosam, culpa, tempore.</Text>
      </View>

    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Informacion',
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 16
  },
  image: {

  }
});