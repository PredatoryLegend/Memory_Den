import React, { useState } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	Image,
	Modal,
	Button,
	TouchableOpacity,
} from "react-native";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppFilter from "../components/AppFilter";
import DataManager from "../config/DataManager";
import AppButton from "../components/AppButton";
import AppPhotoInfo from "../components/AppPhotoInfo";

const filters = [
	{ id: "1", icon: "radiobox-blank", label: "Date - Desc." },
	{ id: "2", icon: "radiobox-blank", label: "Date - Asc." },
	{ id: "3", icon: "radiobox-blank", label: "A to Z" },
	{ id: "4", icon: "radiobox-blank", label: "Z to A" },
];

const getPhotos = (id) => {
	let commonData = DataManager.getInstance();
	return commonData.getCollectionPhotos(id);
};

function MemoriesScreen({ navigation, route }) {
	const [modalVisible, setModalVisible] = useState(false);
	const [photoData, setPhotoData] = useState(null);
	const [filter, setFilter] = useState("1");
	const [photosList, setPhotosList] = useState(
		getPhotos(route.params.message)
	);

	const handleDelete = (photo) => {
		const newCollectionsList = photosList.filter(
			(item) => item.photoid !== photo.photoid
		);
		setPhotosList(newCollectionsList);
		setModalVisible(false);
	};

	const sortCollections = (filter, list) => {
		if (filter == "1") {
			return list.sort(function (a, b) {
				console.log("filter 1");
				if (a.date < b.date) {
					return 1;
				} else if (a.date > b.date) {
					return -1;
				} else {
					return 0;
				}
			});
		} else if (filter == "2") {
			return list.sort(function (a, b) {
				console.log("filter 2");
				if (a.date < b.date) {
					return -1;
				} else if (a.date > b.date) {
					return 1;
				} else {
					return 0;
				}
			});
		} else if (filter == "3") {
			return list.sort(function (a, b) {
				console.log("filter 3");
				if (a.title.toLowerCase() > b.title.toLowerCase()) {
					return -1;
				} else if (a.title.toLowerCase() < b.title.toLowerCase()) {
					return 1;
				} else {
					return 0;
				}
			});
		} else if (filter == "4") {
			return list.sort(function (a, b) {
				console.log("filter 4");
				if (a.title.toLowerCase() > b.title.toLowerCase()) {
					return 1;
				} else if (a.title.toLowerCase() < b.title.toLowerCase()) {
					return -1;
				} else {
					return 0;
				}
			});
		} else {
			console.log("Got a funky id here: " + filter);
		}
	};

	return (
		<>
			<AppScreen>
				<FlatList
					numColumns={2}
					columnWrapperStyle={styles.row}
					data={photosList}
					keyExtractor={(photo) => photo.photoid}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.listImages}
							onPress={() => {
								setModalVisible(true);
								setPhotoData(item);
								console.log(photoData);
							}}
						>
							<Image
								source={item.image}
								style={{
									width: 178,
									height: 178,
								}}
							/>
						</TouchableOpacity>
					)}
				/>
				<AppFilter
					selectedItem={filter}
					onSelectItem={(item) => setFilter(item.id)}
					icon="filter-outline"
					data={filters}
					sortCollections={() => sortCollections(filter, photosList)}
				/>
			</AppScreen>

			<Modal transparent visible={modalVisible}>
				<View style={styles.outContainer}>
					<View style={styles.inContainer}>
						<Button
							title="Close"
							onPress={() => {
								setModalVisible(false);
								setPhotoData(null);
							}}
						/>
						{photoData && (
							<Image
								style={styles.image}
								source={photoData.image}
							/>
						)}
						<View style={styles.buttonContainer}>
							<AppButton
								style={styles.button}
								title="Delete"
								onPress={() => handleDelete(photoData)}
							/>
						</View>
					</View>
				</View>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		paddingTop: 5,
	},
	row: {
		flex: 1,
		justifyContent: "space-around",
	},
	listImages: {
		borderColor: AppColors.black,
		borderWidth: 1,
	},

	outContainer: {
		backgroundColor: AppColors.bTColor,
		height: "100%",
	},
	inContainer: {
		backgroundColor: AppColors.invisible,
		width: "80%",
		height: "80%",
		alignSelf: "center",
		marginTop: 100,
	},
	image: {
		height: 180,
		maxWidth: "100%",
		alignSelf: "center",
		marginBottom: 30,
	},
	buttonContainer: {
		justifyContent: "flex-end",
		flexDirection: "column",
		width: "60%",
		alignSelf: "center",
	},
	button: {},
});

export default MemoriesScreen;
