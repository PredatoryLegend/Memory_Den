import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Modal,
	Button,
	TouchableWithoutFeedback,
	FlatList,
	Image,
	AppButton,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";
import AppScreen from "./AppScreen";

const doNothing = () => {
	console.log("Hi");
};

function AppPhotoInfo({ children, item }) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				{children}
			</TouchableWithoutFeedback>
			<Modal transparent visible={modalVisible}>
				<View style={styles.outContainer}>
					<View style={styles.inContainer}>
						<Button
							title="Close"
							onPress={() => setModalVisible(false)}
						/>
						<Image
							style={styles.image}
							source={require("../assets/randPic03.jpg")}
						/>
						<View style={styles.buttonContainer}>
							<AppButton
								style={styles.buttons}
								title="Add"
								color={AppColors.aColor}
								onPress={() => doNothing()}
							/>
							<AppButton
								style={styles.buttons}
								title="Delete"
								color={AppColors.aColor}
								onPress={() => doNothing()}
							/>
						</View>
					</View>
				</View>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	outContainer: {
		backgroundColor: AppColors.bTColor,
		height: "100%",
	},
	inContainer: {
		backgroundColor: AppColors.invisible,
		width: "80%",
		height: "80%",
		alignSelf: "center",
	},
	image: {
		height: 180,
		maxWidth: "100%",
		alignSelf: "center",
	},
	buttonContainer: {
		justifyContent: "flex-end",
		flexDirection: "column",
	},
	buttons: {
		flex: 0.5,
	},
});

export default AppPhotoInfo;
