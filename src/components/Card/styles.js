import styled from "styled-components/native";

export const ContainerTab = styled.View`
	height: 60px;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	margin: 4px 20px -1px;
	padding: 14px;
	background-color: ${(props) => props.theme.colors.whiteNeutral};
	border-radius: 4px;
`;

export const AvatarImage = styled.Image`
	height: 34px;
	width: 34px;
	border-radius: 17px;
	margin: 0 0 0 10px;
`;

export const TableInfos = styled.Text`
	font-family: "Roboto_400Regular";
	font-weight: 400;
	font-size: ${(props) => props.theme.typography.h3};
	color: ${(props) => props.theme.colors.blackNeutral};
`;

export const ArrowIcon = styled.Image`
	height: 42px;
	width: 42px;
`;

export const Infos = styled(TableInfos)`
	font-family: "Roboto_500Medium";
	font-weight: 500;
	font-size: ${(props) => props.theme.typography.h2};
`;

export const ContainerTabInfos = styled.View`
	height: 140px;
	margin: 0px 20px -1px;
	background-color: ${(props) => props.theme.colors.whiteNeutral};
`;

export const WrapperTab = styled(ContainerTab)`
	height: 40px;
	flex-direction: row;
	padding: 0px 6px 10px;
	margin: 0px 10px 0px;
	border-bottom: 1px dashed ${(props) => props.theme.colors.gray20};
	border-radius: 0px;
`;
