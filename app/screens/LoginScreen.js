import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import AppScreen from "../components/AppScreen.js";
import AppTextInput from "../components/AppTextInput.js";
import AppColors from "../config/AppColors.js";
import AppButton from "../components/AppButton.js";
import AppText from "../components/AppText.js";
import DataManager from "../config/DataManager.js";

const getUserList = () => {
	let commonData = DataManager.getInstance();
	let userList = commonData.getUsers();
	return userList;
};

const userList = getUserList();

const schema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	password: Yup.string().required().min(4).max(12).label("Password"),
});

const validateUser = ({ name, password }) => {
	return (
		userList.filter(
			(user) => user.name === name && user.password === password
		).length > 0
	);
};

const getUser = ({ name }) => {
	return userList.find((user) => user.name === name);
};

const setUser = ({ name }) => {
	let commonData = DataManager.getInstance();
	let userID = commonData.getUserByName(name).userid;
	commonData.setUserID(userID);
};

function LoginScreen({ navigation }) {
	return (
		<AppScreen>
			<View style={styles.iconContainer}>
				<Image
					style={styles.image}
					source={require("../assets/md-logo.png")}
				/>
			</View>
			<Formik
				initialValues={{ name: "", password: "" }}
				onSubmit={(values, { resetForm }) => {
					if (validateUser(values)) {
						resetForm();
						setUser(values);
						navigation.navigate("TabNav", {
							screen: "Home",
							params: {
								paramEmail: getUser(values).email,
								paramName: getUser(values).name,
							},
						});
					} else {
						resetForm();
						alert("Invalid Login Details");
					}
				}}
				validationSchema={schema}
			>
				{({
					handleChange,
					handleSubmit,
					errors,
					setFieldTouched,
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
							<AppButton title="Login" onPress={handleSubmit} />
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

export default LoginScreen;
