import React, { useState } from "react";

import {
	View,
	StyleSheet,
	Modal,
	Button,
	TouchableWithoutFeedback,
	TouchableOpacity,
	FlatList,
	Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import AppColors from "../config/AppColors";
import DataManager from "../config/DataManager";

function AppFilter({
	data,
	icon,
	placeholder,
	selectedItem,
	onSelectItem,
	sortCollections,
}) {
	const getCollectionByID = (id) => {
		let commonData = DataManager.getInstance();
		return commonData.getCollectionByID(id);
	};
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={selectedItem ? "filter" : icon}
							size={35}
						/>
					)}
				</View>
			</TouchableWithoutFeedback>
			<Modal transparent visible={modalVisible} animationType="slide">
				<View style={styles.outContainer}>
					<View style={styles.inContainer}>
						<Button
							title="Close"
							onPress={() => setModalVisible(false)}
						/>
						<FlatList
							data={data}
							keyExtractor={(item) => item.id.toString()}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() => {
										setModalVisible(false);
										onSelectItem(item);
										sortCollections();
										console.log(selectedItem);
									}}
								>
									<View style={styles.itemContainer}>
										<AppText style={styles.text}>
											{item.label}
										</AppText>
									</View>
								</TouchableOpacity>
							)}
						/>
					</View>
				</View>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		backgroundColor: AppColors.cTColor,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "flex-end",
		borderRadius: 37,
		top: 15,
		right: 15,
		width: 55,
		height: 55,
		borderColor: AppColors.black,
		borderWidth: 2,
	},
	text: {
		color: AppColors.black,
		textAlign: "center",
		flex: 1,
		backgroundColor: AppColors.tWhite,
		borderRadius: 20,
	},
	itemContainer: {
		flexDirection: "row",
		paddingVertical: 10,
		width: 180,
		alignSelf: 'center',
	},
	outContainer: {
		backgroundColor: AppColors.cTColor,
		height: "100%",
	},
	inContainer: {
		backgroundColor: AppColors.invisible,
		width: "80%",
		height: "80%",
		alignSelf: "center",
		marginTop: 100,
	},
});

export default AppFilter;
