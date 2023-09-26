import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";

import AppScreen from "../components/AppScreen";
import AppFilter from "../components/AppFilter";
import AppCardCollection from "../components/AppCardCollection.js";
import DataManager from "../config/DataManager";
import AppIcon from "../components/AppTabIcon";
import AppColors from "../config/AppColors";

const filters = [
	{ id: "1", icon: "radiobox-blank", label: "Date - Desc." },
	{ id: "2", icon: "radiobox-blank", label: "Date - Asc." },
	{ id: "3", icon: "radiobox-blank", label: "A to Z" },
	{ id: "4", icon: "radiobox-blank", label: "Z to A" },
];
function CollectionsScreen({ navigation }) {
	const [filter, setFilter] = useState("1");

	const getUserCollections = () => {
		let commonData = DataManager.getInstance();
		let id = commonData.getUserID();
		return commonData.getUserCollections(id);
	};

	const [collectionsList, setCollectionsList] = useState(
		getUserCollections()
	);

	const handleDelete = (collection) => {
		let commonData = DataManager.getInstance();
		let newCollectionsList = collectionsList.filter(
			(item) => item.collectionid !== collection.collectionid
		);
		commonData.changeCollections(newCollectionsList);
		setCollectionsList(getUserCollections);
		console.log(commonData.getCollections());
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
				if (a.name.toLowerCase() > b.name.toLowerCase()) {
					return -1;
				} else if (a.name.toLowerCase() < b.name.toLowerCase()) {
					return 1;
				} else {
					return 0;
				}
			});
		} else if (filter == "4") {
			return list.sort(function (a, b) {
				console.log("filter 4");
				if (a.name.toLowerCase() > b.name.toLowerCase()) {
					return 1;
				} else if (a.name.toLowerCase() < b.name.toLowerCase()) {
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
		<AppScreen style={styles.background}>
			<FlatList
				data={collectionsList}
				keyExtractor={(collection) =>
					collection.collectionid.toString()
				}
				renderItem={({ item }) => (
					<AppCardCollection
						title={item.name}
						image={item.image}
						date={item.date}
						id={item.collectionid}
						onPress={() => {
							navigation.navigate("Memories", {
								message: item.collectionid,
							});
						}}
						onSwipeLeft={() => (
							<View style={styles.deleteView}>
								<TouchableOpacity
									onPress={() => handleDelete(item)}
								>
									<AppIcon
										name="trash-can"
										size={100}
										iconColor={AppColors.white}
										backgroundColor={AppColors.invisible}
										style={styles.icon}
									/>
								</TouchableOpacity>
							</View>
						)}
					/>
				)}
			/>
			<AppFilter
				selectedItem={filter}
				onSelectItem={(item) => setFilter(item.id)}
				icon="filter-outline"
				data={filters}
				sortCollections={() => sortCollections(filter, collectionsList)}
			/>
		</AppScreen>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		paddingTop: 5,
	},
	deleteView: {
		backgroundColor: AppColors.cColor,
		width: 60,
		height: 170,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 5,
	},
	icon: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10,
	},
});

export default CollectionsScreen;
