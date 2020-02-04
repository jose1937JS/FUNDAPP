import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Image, SafeAreaView } from 'react-native';

import { Container, Text, Card, CardItem, Header, Content, Body, Spinner } from 'native-base';

export default class LinksScreen extends Component {

	constructor(props){
		super(props);

		this.state = {
			loading: false,
			data: [],
			host: 'http://192.168.0.99:8000'
		}
	}

	componentDidMount() {

		this.setState({loading: true});

		fetch(`${this.state.host}/api/services`, {cache: "no-cache"})
		.then((res) => res.json())
		.then((responseJson) => {

			console.log(responseJson)

			this.setState({
				data: responseJson,
				loading: false
			});

		})
		.catch((error) => {
			console.error(error);
		});
	}

	render(){

		if (this.state.loading) {
			return (
				<View style={styles.centerSpinner}>
					<Spinner color='blue' />
				</View>
			);
		}

		return (

			<Container>
				<Content padder >

					{this.state.data.map((item, index) => {
						return(
							<Card key={index}>
								<CardItem>
									<Body style={{ paddingRight: 25 }}>
										<Text style={{ fontSize: 20 }}>{ item.name }</Text>
										<Text style={{ fontSize: 13, textAlign: 'justify' }}>{ item.description }</Text>
									</Body>
									<Body style={styles.center}>
										<Image style={styles.image} source={{ uri: `${this.state.host}/${item.icon}` }} />
									</Body>
								</CardItem>
							</Card>
						);
					})}

				</Content>
			</Container>
		);
	}
}

LinksScreen.navigationOptions = {
	title: 'Servicios',
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		paddingLeft: 15,
		paddingRight: 15,
		backgroundColor: '#fff',
	},
	center: {
		alignItems: 'center'
	},
	image: {
		width: 130,
		height: 130
	},
	centerSpinner: {
		flex: 1,
		justifyContent: 'center',
		alignItems:'center'
	}
});
