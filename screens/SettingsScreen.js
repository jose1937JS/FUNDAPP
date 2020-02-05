import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';

import { Container, Text, Card, CardItem, Header, Content, Body, Spinner, Grid, Row, Col, Icon } from 'native-base';

export default class SettingsScreen extends Component {

	constructor(props){
		super(props);

		this.state = {
			loading: false,
			data: [],
			host: 'http://192.168.43.144:8000'
		}
	}

	componentWillMount() {

		this.setState({loading: true});

		fetch(`${this.state.host}/api/enterprise`, {cache: "no-cache"})
		.then((res) => res.json())
		.then((responseJson) => {

			console.log(responseJson.enterprise_phones[0].phone)

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
					<Spinner color='green' />
				</View>
			);
		}

		return (

			<Container>
				<Content  >

					<Body style={styles.centerBox}>
						<Image style={styles.image} source={{ uri: `${this.state.host}/${this.state.data.logo}` }} />
						<Text style={{ fontSize: 22 }}>{ this.state.data.name }</Text>
						<Text style={{ fontSize: 16 }}>{ this.state.data.rif }</Text>
						<Text style={{ fontSize: 12 }}>{ this.state.data.address }</Text>

						<View style={styles.mt}></View>

						<View style={styles.mt}>
							<Text style={{ fontSize: 16, textAlign: 'center' }}>Persona Encargada</Text>
							<Text style={styles.description}>{ this.state.data.manager }</Text>
						</View>

						<View style={styles.mt}>
							<Text style={ styles.description}>{ this.state.data.description }</Text>
						</View>

						<View style={styles.mt}>
							<Text style={{ fontSize: 16, textAlign: 'center' }}>Misión</Text>
							<Text style={styles.description}>{ this.state.data.mission }</Text>
						</View>

						<View style={styles.mt}>
							<Text style={{ fontSize: 16, textAlign: 'center' }}>Visión</Text>
							<Text style={styles.description}>{ this.state.data.vision }</Text>
						</View>

						<View style={styles.mt}>
							<Text style={{ fontSize: 16, textAlign: 'center' }}>Contacto</Text>
						</View>

					</Body>

					<View style={{ marginBottom: 20 }}>
						<Grid>
							<Row>
								<Col>
									{this.state.data.enterprise_phones.map((phone, index) => {
										return(
											<Row>
												<Col>
													<View style={ styles.description, styles.view }>
														<Text style={{ marginRight: 5 }}>
															<Icon style={{ fontSize: 14 }} name="ios-call" />
														</Text>
														<Text>
															{ phone.phone }
														</Text>
													</View>
												</Col>
											</Row>
										);
									})}

								</Col>
								<Col>
									{this.state.data.enterprise_emails.map((email, index) => {
										return(
											<Row>
												<Col>
													<View style={ styles.description, styles.view }>
														<Text style={{ marginRight: 5 }}>
															<Icon style={{ fontSize: 14 }} name="md-mail" />
														</Text>
														<Text>
															{ email.email }
														</Text>
													</View>
												</Col>
											</Row>
										);
									})}
								</Col>
							</Row>
						</Grid>
					</View>


				</Content>
			</Container>
		);
	}
}

SettingsScreen.navigationOptions = {
	title: 'Información',
};

const styles = StyleSheet.create({
	textCenter: {
		textAlign: 'center',
		fontSize: 16
	},
	centerBox: {
		flex: 1,
		alignItems: 'center',
		paddingLeft: 20,
		paddingRight: 20,
		marginBottom: 20
	},
	centerSpinner: {
		flex: 1,
		justifyContent: 'center',
		alignItems:'center'
	},
	description: {
		fontSize: 13,
		textAlign: 'center',
	},
	mt: {
		marginTop: 15
	},
	image: {
		marginBottom: 15,
		width: 300,
		height: 160,
		resizeMode: 'contain'
	},
	view: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});