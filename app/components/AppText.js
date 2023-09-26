import React from "react";
import { Text, StyleSheet } from "react-native";
import AppScreen from "../components/AppScreen.js";
import AppColors from "../config/AppColors.js";

function AppText({ children, style }) {
	return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir-Roman",
		color: AppColors.black,
	},
});

export default AppText;
