import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import AppScreen from "../components/AppScreen.js";
import AppTextInput from "../components/AppTextInput.js";
import AppColors from "../config/AppColors.js";
import AppButton from "../components/AppButton.js";
import DataManager from "../config/DataManager.js";
import AppText from "../components/AppText.js";

const getUserList = () => {
	let commonData = DataManager.getInstance();
	let userList = commonData.getUsers();
	return userList;
};

const userList = getUserList();

const schema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).max(12).label("Password"),
});

const validateNewUser = ({ name, email }) => {
	return (
		userList.filter((user) => user.name != name && user.email != email)
			.length > 0
	);
};

const addUser = ({ name, email, password }) => {
	let commonData = DataManager.getInstance();
	const users = commonData.getUsers();
	const userid = "user" + (users.length + 1);
	const newUser = {
		userid: userid,
		name: name,
		email: email,
		password: password,
		image: require("../assets/md-logo.png"),
	};
	commonData.addUser(newUser);
};

const getUser = ({ email }) => {
	return userList.find((user) => user.email === email);
};

const setUser = ({ email }) => {
	let commonData = DataManager.getInstance();
	let userID = getUser({ email }).userid;
	commonData.setUserID(userID);
};

function RegisterScreen({ navigation }) {
	return (
		<AppScreen>
			<View style={styles.iconContainer}>
				<Image
					style={styles.image}
					source={require("../assets/md-logo.png")}
				/>
			</View>
			<Formik
				initialValues={{ name: "", email: "", password: "" }}
				onSubmit={(values, { resetForm }) => {
					if (validateNewUser(values)) {
						resetForm();
						addUser(values);
						setUser(values);
						navigation.navigate("TabNav", {
							screen: "Home",
							params: {
								paramName: getUser(values).name,
								paramEmail: getUser(values).email,
							},
						});
					} else {
						resetForm();
						alert(
							"A User is already registered with that name/email"
						);
					}
				}}
				validationSchema={schema}
			>
				{({
					handleChange,
					handleSubmit,
					setFieldTouched,
					errors,
					touched,
					values,
				}) => (
					<>
						<View style={styles.inputsContainer}>
							<AppTextInput
								icon="account"
								placeholder="Full Name"
								secureTextEntry={false}
								autoCapitalize="words"
								autoCorrect={false}
								keyboardType="default"
								textContentType="name"
								value={values.name}
								onBlur={() => setFieldTouched("name")}
								onChangeText={handleChange("name")}
							/>
							{touched.name && <AppText>{errors.name}</AppText>}

							<AppTextInput
								icon="email"
								placeholder="Email Address"
								secureTextEntry={false}
								autoCapitalize="none"
								autoCorrect={false}
								keyboardType="email-address"
								textContentType="emailAddress"
								value={values.email}
								onBlur={() => setFieldTouched("email")}
								onChangeText={handleChange("email")}
							/>
							{touched.email && <AppText>{errors.email}</AppText>}

							<AppTextInput
								icon="lock"
								placeholder="Password"
								secureTextEntry={true}
								autoCapitalize="none"
								autoCorrect={false}
								textContentType="password"
								value={values.password}
								onBlur={() => setFieldTouched("password")}
								onChangeText={handleChange("password")}
							/>
							{touched.password && (
								<AppText>{errors.password}</AppText>
							)}
						</View>

						<View style={styles.buttonsContainer}>
							<AppButton
								title="Register"
								onPress={handleSubmit}
							/>
						</View>
					</>
				)}
			</Formik>
		</AppScreen>
	);
}

const styles = StyleSheet.create({
	iconContainer: {
		flex: 0.2,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 50,
		minHeight: 100,
	},
	image: {
		width: 120,
		height: 120,
		alignSelf: "center",
		marginTop: 30,
	},
	inputsContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 50,
		padding: 25,
	},
	buttonsContainer: {
		justifyContent: "space-between",
		height: 140,
		alignSelf: "center",
		width: "30%",
	},
});

export default RegisterScreen;
