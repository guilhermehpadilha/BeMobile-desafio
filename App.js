import React from "react";
import { SafeAreaView } from "react-native";

import {
	useFonts,
	Roboto_500Medium,
	Roboto_400Regular,
} from "@expo-google-fonts/roboto";

import Home from "./src/screens/Home";
import Theme from "./src/theme";

export default function App() {
	let [fontsLoaded] = useFonts({
		Roboto_500Medium,
		Roboto_400Regular,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
			<Theme>
				<Home />
			</Theme>
		</SafeAreaView>
	);
}
