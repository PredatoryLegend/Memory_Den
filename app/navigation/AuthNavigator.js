import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen.js";
import LoginScreen from "../screens/LoginScreen.js";
import RegisterScreen from "../screens/RegisterScreen.js";
import TabNav from "./TabNavigator.js";

const AppStack = createStackNavigator();

const AuthNavigator = () => (
	<AppStack.Navigator
		screenOptions={{
			headerStyle: {
				elevation: 0,
				shadowOpacity: 0,
			},
		}}
	>
		<AppStack.Screen
			name="Welcome"
			component={WelcomeScreen}
			options={{
				headerShown: false,
			}}
		/>
		<AppStack.Screen name="Login" component={LoginScreen} />
		<AppStack.Screen name="Register" component={RegisterScreen} />
		<AppStack.Screen
			name="TabNav"
			component={TabNav}
			options={{ headerShown: false, gestureEnabled: false }}
		/>
	</AppStack.Navigator>
);

export default AuthNavigator;
