import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
	ArrowIcon,
	AvatarImage,
	ContainerTab,
	ContainerTabInfos,
	Infos,
	TableInfos,
	WrapperTab,
} from "./styles";

import arrowUp from "../../assets/Icon/arrow-up.png";
import arrowDown from "../../assets/Icon/arrow-down.png";

export default function Card({ name, avatar_url, cargo, date, telefone }) {
	const [isActive, setIsActive] = useState(false);
	const onPress = () => setIsActive(!isActive);

	return (
		<>
			<TouchableOpacity onPress={onPress}>
				<ContainerTab>
					<AvatarImage source={{ uri: avatar_url }} />
					<TableInfos>{name}</TableInfos>
					<ArrowIcon source={isActive ? arrowUp : arrowDown} />
				</ContainerTab>
			</TouchableOpacity>

			{isActive && (
				<ContainerTabInfos>
					<WrapperTab>
						<Infos>Cargo</Infos>
						<TableInfos>{cargo}</TableInfos>
					</WrapperTab>
					<WrapperTab>
						<Infos>Data de Admissão</Infos>
						<TableInfos>
							{date.replace(/(\d{4})\W(\d{2})\W(\d{2})/, "$3/$2/$1")}
						</TableInfos>
					</WrapperTab>
					<WrapperTab>
						<Infos>Telefone</Infos>
						<TableInfos>
							{telefone.replace(
								/(\d{2})(\d{2})(\d{4})(\d{4})/,
								"+$1 ($2) $3-$4"
							)}
						</TableInfos>
					</WrapperTab>
				</ContainerTabInfos>
			)}
		</>
	);
}
