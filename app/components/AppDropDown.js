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

function AppDropDown({ data, icon, placeholder, selectedItem, onSelectItem }) {
	const getCollectionByID = (id) => {
		let commonData = DataManager.getInstance();
		return commonData.getCollectionByID(id);
	};
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<View>
				<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
					<View style={styles.container}>
						{icon && (
							<MaterialCommunityIcons name={icon} size={24} />
						)}
						<AppText style={styles.text}>
							{selectedItem
								? getCollectionByID(selectedItem).name
								: placeholder}
						</AppText>
						<MaterialCommunityIcons name="chevron-down" size={24} />
					</View>
				</TouchableWithoutFeedback>

				<Modal visible={modalVisible} animationType="slide">
					<>
						<Button
							title="Close"
							onPress={() => setModalVisible(false)}
						/>
						<FlatList
							data={data}
							keyExtractor={(item) =>
								item.collectionid.toString()
							}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() => {
										setModalVisible(false);
										onSelectItem(item.collectionid);
										console.log(selectedItem)
									}}
								>
									<View style={styles.itemContainer}>
										<AppText style={styles.text}>
											{item.name}
										</AppText>
									</View>
								</TouchableOpacity>
							)}
						/>
					</>
				</Modal>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: AppColors.aColor,
		flexDirection: "row",
		borderRadius: 25,
		padding: 10,
		marginVertical: 20,
		width: "100%",
	},
});
export default AppDropDown;
