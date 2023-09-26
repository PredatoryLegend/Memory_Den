import React, { useState } from "react";
import { StyleSheet, View, Button, Modal, Image, Text } from "react-native";
import * as photoPicker from "expo-image-picker";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppButton from "../components/AppButton";
import AppDropDown from "../components/AppDropDown";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";

import DataManager from "../config/DataManager";

const getCollections = () => {
	let commonData = DataManager.getInstance();
	return commonData.getCollections();
};

function AddScreen({ props }) {
	const [photoName, setPhotoName] = useState("");
	const [selectedPhotoCollection, setSelectedPhotoCollection] = useState("");
	const [selectedPhotoImage, setSelectedPhotoImage] = useState(null);
	const [photoNameError, setPhotoNameError] = useState("");
	const [photoCollectionError, setPhotoCollectionError] = useState("");
	const [photoImageError, setPhotoImageError] = useState("");

	const [collectionName, setCollectionName] = useState("");
	const [selectedCollectionImage, setSelectedCollectionImage] =
		useState(null);
	const [collectionNameError, setCollectionNameError] = useState("");
	const [collectionImageError, setCollectionImageError] = useState("");

	const [date, setDate] = useState(null);
	const collectionsList = getCollections();

	const doPhotoErrorCheck = () => {
		setPhotoNameError(
			photoName.length > 0 ? "" : "Please set a valid Book Title"
		);
		setPhotoCollectionError(
			selectedPhotoCollection
				? ""
				: "Please pick a category from the list"
		);
		setPhotoImageError(selectedPhotoImage ? "" : "Please pick an image");
		return photoName.length > 0 &&
			selectedPhotoCollection &&
			selectedPhotoImage
			? true
			: false;
	};

	const clearStates = () => {
		setPhotoName("");
		setSelectedPhotoCollection("");
		setSelectedPhotoImage(null);
		setCollectionName("");
		setSelectedCollectionImage(null);
	};

	const doCollectionErrorCheck = () => {
		setCollectionNameError(
			collectionName.length > 0 ? "" : "Please set a valid Book Title"
		);
		setCollectionImageError(
			selectedCollectionImage ? "" : "Please pick an image"
		);
		return collectionName.length > 0 && selectedCollectionImage
			? true
			: false;
	};

	let imageSelector = async (addTo) => {
		let permissionResult =
			await photoPicker.requestMediaLibraryPermissionsAsync();
		if (permissionResult.granted === false) {
			alert("Permission to access camera roll is required!");
			return;
		}
		let pickerResult = await photoPicker.launchImageLibraryAsync();
		if (pickerResult.cancelled === true) {
			return;
		}
		addTo(pickerResult.uri);
	};

	const addPhoto = () => {
		let commonData = DataManager.getInstance();
		let user = commonData.getUserID();

		const photos = commonData.getPhotos();
		const photoid = "photo" + (photos.length + 1);
		const newPhoto = {
			photoid: photoid,
			userid: user,
			collectionid: selectedPhotoCollection,
			title: photoName,
			image: { uri: selectedPhotoImage },
			date: getDate(),
		};
		commonData.addPhoto(newPhoto);
		console.log(newPhoto);
	};

	const addCollection = () => {
		let commonData = DataManager.getInstance();
		let user = commonData.getUserID();

		const collections = commonData.getCollections();
		const collectionid = "collection" + (collections.length + 1);
		const newCollection = {
			userid: user,
			collectionid: collectionid,
			title: collectionName,
			image: { uri: selectedCollectionImage },
			creationDate: getDate(),
		};
		commonData.addCollection(newCollection);
		console.log(newCollection);
	};

	const getDate = () => {
		let date = Date.now();
		console.log(date);
		return date;
	};

	return (
		<AppScreen>
			<View style={styles.selectionContainer}>
				<Text style={styles.title}>Post a Memory</Text>

				<AppTextInput
					icon="image"
					placeholder="Memory Name"
					onChangeText={(inputText) => setPhotoName(inputText)}
				/>
				{photoNameError.length > 0 ? (
					<AppText>{photoNameError}</AppText>
				) : (
					<></>
				)}

				<AppDropDown
					selectedItem={selectedPhotoCollection}
					onSelectItem={(item) => setSelectedPhotoCollection(item)}
					data={collectionsList}
					icon="apps"
					placeholder="Collections"
				/>
				{photoCollectionError.length > 0 ? (
					<AppText>{photoCollectionError}</AppText>
				) : (
					<></>
				)}

				<View style={styles.buttonContainer}>
					<AppButton
						title="Select Photo"
						onPress={() => {
							imageSelector(setSelectedPhotoImage);
						}}
					/>
					{selectedPhotoImage && (
						<Image
							style={styles.image}
							source={{ uri: selectedPhotoImage.path }}
						/>
					)}
					{photoImageError.length > 0 ? (
						<AppText>{photoImageError}</AppText>
					) : (
						<></>
					)}
				</View>

				<View style={styles.buttonContainer}>
					<AppButton
						title="Post Photo"
						onPress={() => {
							if (doPhotoErrorCheck()) {
								{
									addPhoto();
									clearStates();
								}
							}
						}}
					/>
				</View>
			</View>

			<View style={styles.selectionContainer}>
				<Text style={styles.title}>Create a Collection</Text>

				<AppTextInput
					icon="image"
					placeholder="Collection Name"
					onChangeText={(inputText) => setCollectionName(inputText)}
				/>
				{collectionNameError.length > 0 ? (
					<AppText>{collectionNameError}</AppText>
				) : (
					<></>
				)}

				<View style={styles.buttonContainer}>
					<AppButton
						title="Select Photo"
						onPress={() => {
							imageSelector(setSelectedCollectionImage);
						}}
					/>
					{selectedCollectionImage && (
						<Image
							style={styles.image}
							source={{ uri: selectedCollectionImage.path }}
						/>
					)}
					{collectionImageError.length > 0 ? (
						<AppText>{collectionImageError}</AppText>
					) : (
						<></>
					)}
				</View>

				<View style={styles.buttonContainer}>
					<AppButton
						title="Post Collection"
						onPress={() => {
							if (doCollectionErrorCheck()) {
								{
									addCollection();
									clearStates();
								}
							}
						}}
					/>
				</View>
			</View>
		</AppScreen>
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
	selectionContainer: {
		padding: 20,
		paddingHorizontal: 40,
	},
	title: {
		alignSelf: "center",
		fontSize: 25,
		color: AppColors.aColor,
		fontWeight: "bold",
	},
	buttonContainer: {
		paddingVertical: 10,
	},
	image: {
		width: 100,
		height: 100,
		alignSelf: "center",
	},
});

export default AddScreen;
