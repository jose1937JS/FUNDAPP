import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

export default function HomeScreen() {
	return (

		<View style={styles.container}>
			<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

				<Image style={styles.welcomeImage} source={require('../assets/images/GettingStartedCongratulations.png')} />

				<View style={styles.getStartedContainer}>

				<Text style={styles.titulo}>Lorem ipsum dolor sit</Text>
				<Text style={styles.getStartedText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, cumque unde consequuntur nesciunt error maiores inventore in laboriosam, culpa, tempore.</Text>

				</View>

			</ScrollView>
		</View>
	);
}

HomeScreen.navigationOptions = {
	header: null,
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	titulo: {
		fontSize: 25,
		marginBottom: 10
	},
	contentContainer: {
		paddingTop: 30,
	},
	welcomeImage: {
		width: 'auto',
		height: 200,
		resizeMode: 'contain',
		marginTop: 3,
		marginBottom: 30
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	getStartedText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		lineHeight: 24,
		textAlign: 'center',
	},
});
