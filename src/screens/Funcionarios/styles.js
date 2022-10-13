import styled from "styled-components/native";

export const Title = styled.Text`
	font-size: ${(props) => props.theme.typography.h1};
	font-family: "Roboto_500Medium";
	font-weight: 600;
	color: ${(props) => props.theme.colors.blackNeutral};
	padding: 20px;
`;

export const Container = styled.View`
	height: 47px;
	margin: 20px;
	padding: 0px 16px;

	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	border: 1px solid ${(props) => props.theme.colors.grayNeutral0};
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.whiteNeutral};
	box-shadow: 0px 4px 4px ${(props) => props.theme.colors.blackNeutral};
`;

export const SearchBar = styled.TextInput`
	height: 43px;
	flex: 1;
	justify-content: space-between;
	align-items: center;

	font-size: ${(props) => props.theme.typography.h3};
	font-family: "Roboto_400Regular";
	font-weight: 400;
	color: ${(props) => props.theme.colors.gray20};
`;

export const SearchIcon = styled.Image`
	height: 24px;
	width: 24px;
`;

export const ContainerTab = styled(Container)`
	justify-content: space-between;
	align-items: center;
	margin: 0px 20px -2px;
	padding: 14px 20px;
	background-color: ${(props) => props.theme.colors.bluePrimary};
`;

export const TableText = styled.Text`
	font-family: "Roboto_400Regular";
	font-weight: 500;
	font-size: ${(props) => props.theme.typography.h3};
	line-height: 19px;
	color: ${(props) => props.theme.colors.whiteNeutral};
`;
