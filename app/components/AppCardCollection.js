import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Swipeable } from "react-native-gesture-handler";

import AppColors from "../config/AppColors";
import DataManager from "../config/DataManager";
import AppText from "./AppText";
DataManager;

function AppCardCollection({ title, image, date, id, onPress, onSwipeLeft }) {
	const getCollectionSize = (id) => {
		let commonData = DataManager.getInstance();
		return commonData.getCollectionPhotos(id);
	};
	var rawDate = new Date(date * 1000);
	let currentDate =
		rawDate.getDate() +
		"/" +
		(rawDate.getMonth() + 1) +
		"/" +
		rawDate.getFullYear();

	const collectionSize = getCollectionSize(id).length;

	return (
		<Swipeable renderRightActions={onSwipeLeft}>
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={onPress}>
					<Image style={styles.image} source={ image } />
				</TouchableWithoutFeedback>
				<View style={styles.textContainer}>
					<AppText>{title}</AppText>
					<AppText style={{ fontSize: 15 }}>
						{"Memories: " + collectionSize.toString()}
					</AppText>
					<AppText style={{ fontSize: 15 }}>
						{"Created: " + currentDate.toString()}
					</AppText>
				</View>
			</View>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: AppColors.aColor,

		alignSelf: "center",
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 20,
		width: "95%",
		height: 170,
		alignItems: "center",
	},
	image: {
		marginLeft: 5,
		width: 150,
		height: 150,
		borderRadius: 37,
		alignSelf: "center",
		borderWidth: 1,
		borderColor: AppColors.aColor,
	},
	textContainer: {
		flexDirection: "column",
		marginLeft: 6,
	},
});

export default AppCardCollection;
