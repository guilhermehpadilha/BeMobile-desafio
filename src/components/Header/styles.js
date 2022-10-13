import styled from "styled-components/native";

export const ViewHeader = styled.View`
	height: ${(props) => props.theme.spacing.medium3};
	background-color: ${(props) => props.theme.colors.blackNeutral};
	align-items: flex-start;
	justify-content: center;
`;

export const Logo = styled.Image`
	margin-left: ${(props) => props.theme.spacing.regular2};
`;
