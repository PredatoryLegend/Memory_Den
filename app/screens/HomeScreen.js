import React from "react";
import {
	StyleSheet,
	ImageBackground,
	Platform,
	View,
	Image,
} from "react-native";

import AppScreen from "../components/AppScreen.js";
import AppText from "../components/AppText.js";
import AppColors from "../config/AppColors.js";
import AppListProfile from "../components/AppListProfile.js";
import AppButton from "../components/AppButton.js";
import DataManager from "../config/DataManager.js";

const clearInstance = () => {
	return DataManager.clearInstance();
};

const getUser = () => {
	let commonData = DataManager.getInstance();
	let id = commonData.getUserID();
	console.log(id);
	return commonData.getUserByID(id);
};

function HomeScreen({ navigation, route }) {
	const userData = getUser();

	return (
		<AppScreen>
			<Image
				style={styles.image}
				source={require("../assets/md-logo.png")}
			/>
			<View style={styles.profileContainer}>
				<AppListProfile
					image={require("../assets/md-logo.png")}
					title={route.params.paramName}
					subtitle={route.params.paramEmail}
				/>
			</View>

			<View style={styles.buttonsContainer}>
				<AppButton
					title="Log Out"
					onPress={() => {
						navigation.navigate("Welcome");
						clearInstance();
					}}
				/>
			</View>
		</AppScreen>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
	},
	profileContainer: {
		backgroundColor: AppColors.aColor,
		justifyContent: "center",
		alignSelf: "center",
		marginTop: 60,
		borderRadius: 20,
		width: "80%",
		height: 120,
	},
	text: {
		color: AppColors.black,
		fontWeight: "bold",
		textAlign: "center",
	},
	image: {
		width: 120,
		height: 120,
		alignSelf: "center",
		marginTop: 30,
	},
	buttonsContainer: {
		//backgroundColor: 'red',
		marginTop: 260,
		marginEnd: 20,
		flexDirection: "column",
		justifyContent: "space-between",
		height: 140,
		alignSelf: "flex-end",
		width: "50%",
	},
});

export default HomeScreen;
