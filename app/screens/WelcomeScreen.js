import React from "react";
import {
	StyleSheet,
	ImageBackground,
	Platform,
	View,
	Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppScreen from "../components/AppScreen.js";
import AppText from "../components/AppText.js";
import AppColors from "../config/AppColors.js";
import AppButton from "../components/AppButton.js";

const blurRadiusValue = Platform.OS === "android" ? 0.7 : 1;

function WelcomeScreen({ navigation }) {
	return (
		<AppScreen>
			<View style={styles.welcomeContainer}>
				<Image
					style={styles.image}
					source={require("../assets/md-logo.png")}
				/>
				<AppText style={styles.text}>Welcome to the Memory Den</AppText>
			</View>

			<View style={styles.buttonsContainer}>
				<AppButton
					title="Login"
					onPress={() => navigation.navigate("Login")}
				/>
				<AppButton
					title="Register"
					onPress={() => navigation.navigate("Register")}
				/>
			</View>
		</AppScreen>
	);
}

const styles = StyleSheet.create({
	welcomeContainer: {
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		width: 215,
        height: 215,
		marginTop: 50,
		backgroundColor: AppColors.aColor,
		borderRadius: 60,
	},
	image: {
		width: 120,
		height: 120,
		alignSelf: "center",
		marginTop: 30,
		marginBottom: 10,
	},
	text: {
		color: AppColors.black,
		fontWeight: "bold",
		textAlign: "center",
        marginBottom: 20,
	},
	buttonsContainer: {
		marginTop: 150,
		flexDirection: "column",
		justifyContent: "space-between",
		height: 140,
		alignSelf: "center",
		width: "50%",
	},
});

export default WelcomeScreen;
