import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import Card from "../../components/Card";
import {
	Container,
	ContainerTab,
	SearchBar,
	SearchIcon,
	TableText,
	Title,
} from "./styles";

import search from "../../assets/Icon/search.png";
import { api } from "../../services/api";

export default function Funcionarios() {
	const [searchText, setSearchText] = useState("");
	const [data, setData] = useState([]);
	const [list, setList] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				let response = await fetch(api);
				if (response.status === 200) {
					const result = await response.json();
					setData(result);
					setList(result);
				} else {
					throw "Error fetching";
				}
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);

	useEffect(() => {
		if (searchText === "") {
			setList(data);
		} else {
			setList(
				data.filter((item) => {
					return (
						item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
						item.telefone.indexOf(searchText) > -1 ||
						item.cargo.toLowerCase().indexOf(searchText.toLowerCase()) > -1
					);
				})
			);
		}
	}, [searchText]);

	return (
		<>
			<Title>Funcionários</Title>
			<Container>
				<SearchBar
					value={searchText}
					onChangeText={setSearchText}
					autoCapitalize='none'
					placeholder='Pesquisar'
					keyboardType='text'
				/>
				<SearchIcon source={search} />
			</Container>

			<ContainerTab>
				<TableText>FOTO</TableText>
				<TableText>NOME</TableText>
				<TableText>●</TableText>
			</ContainerTab>

			<FlatList
				data={list}
				renderItem={({ item }) => <Card {...item} />}
				keyExtractor={(item) => item.id}
			/>
		</>
	);
}
