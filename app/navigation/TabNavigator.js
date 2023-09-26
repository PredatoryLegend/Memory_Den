import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import AppTabIcon from "../components/AppTabIcon";
import AppColors from "../config/AppColors";

import CollectionsScreen from "../screens/CollectionsScreen";
import HomeScreen from "../screens/HomeScreen";
import MemoriesScreen from "../screens/MemoriesScreen";
import AddScreen from "../screens/AddScreen";

const AppTab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<AppTab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					height: 60,
					backgroundColor: AppColors.cColor,
				},
			}}
		>
			<AppTab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: () => (
						<AppTabIcon
							size={60}
							name="home"
							iconColor="black"
							backgroundColor="#00000000"
							style={styles.icon}
						/>
					),
					headerShown: false,
					gestureEnabled: false,
				}}
			/>
			<AppTab.Screen
				name="Add"
				component={AddScreen}
				options={{
					tabBarIcon: () => (
						<AppTabIcon
							size={60}
							name="plus-circle-outline"
							iconColor="black"
							backgroundColor="#00000000"
							style={styles.icon}
						/>
					),
					headerShown: false,
				}}
			/>
			<AppTab.Screen
				name="Collections"
				component={CollectionsScreen}
				options={{
					tabBarIcon: () => (
						<AppTabIcon
							size={60}
							name="rhombus-split"
							iconColor="black"
							backgroundColor="#00000000"
							style={styles.icon}
						/>
					),
					headerShown: false,
					screenOptions: {
						tabBarStyle: { height: 300 },
					},
				}}
			/>
			<AppTab.Screen
				name="Memories"
				component={MemoriesScreen}
				options={{
					tabBarIcon: () => (
						<AppTabIcon
							size={60}
							name="rhombus-split"
							iconColor="black"
							backgroundColor="#00000000"
							style={styles.icon}
						/>
					),
					headerShown: false,
					tabBarButton: () => null,
					tabBarVisible: false,
				}}
			/>
		</AppTab.Navigator>
	);
};

const styles = StyleSheet.create({
	icon: {
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
	},
});

export default TabNavigator;
