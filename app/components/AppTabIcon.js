import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTabIcon({ name, size = 40, iconColor, backgroundColor, styles }) {
	return (
		<View
			style={{
				width: size,
				height: size,
				backgroundColor,
				borderRadius: size / 2,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<MaterialCommunityIcons
				name={name}
				size={size * 0.5}
				color={iconColor}
				style={styles}
			/>
		</View>
	);
}


export default AppTabIcon;
