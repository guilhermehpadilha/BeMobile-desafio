import React from "react";
import { Logo, ViewHeader } from "./styles";

import LogoIcon from "../../assets/Icon/logo.png";

export default function Header() {
	return (
		<>
			<ViewHeader>
				<Logo source={LogoIcon} />
			</ViewHeader>
		</>
	);
}
