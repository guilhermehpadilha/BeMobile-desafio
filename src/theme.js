import { ThemeProvider } from "styled-components/native";

const theme = {
	typography: {
		h1: "24px",
		h2: "16px",
		h3: "16px",
	},
	// h3: "16px",  regular
	// Roboto_500Medium,
	// Roboto_400Regular,

	spacing: {
		lite: "01px",
		lite2: "08px",
		medium1: "32px",
		medium2: "40px",
		medium3: "60px",
		medium4: "80px",
		regular1: "16px",
		regular2: "20px",
		regular3: "28px",
	},

	colors: {
		bluePrimary: "#5984c0",
		blackNeutral: "#1C1C1C",
		grayNeutral20: "#9E9E9E",
		grayNeutral10: "#DFDFDF",
		grayNeutral0: "#F0F0F0",
		whiteNeutral: "#FFFFFF",
	},
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
