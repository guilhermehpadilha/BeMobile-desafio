# Be Mobile - Desafio Mobile

Este repositório refere-se ao teste mobile da BeMobile, que propõe a criação de uma tela e suas funcionalidades conforme projeto no Figma.
O projeto foi desenvolvido utilizando React Native e Expo, bem como a lib para customização Styled Components.
Durante o funcionamento são feitas requisições em uma API, a qual foi desenvolvida usando json-server a partir do arquivo db.json (presente no repositório).

## Pré-requisitos

Para rodar e testar a aplicação você deve ter instalado em sua máquina.
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


Também tenha instalado em sua máquina o json-server, para simular a Rest Api onde serão feitas as requisições.
Caso não tenha familiaridade com o [json-server](https://github.com/typicode/json-server):

## Rodando a Aplicação

Para iniciar o projeto, siga o passo a passo abaixo.
```bash
# Clonar esse repositório
$ git clone https://github.com/guilhermehpadilha/BeMobile-desafio.git

# Vá para o ropositório
$ cd BeMobile-desafio

# Instale as dependências
$ npm install
```
Antes de rodar a aplicação algumas alterações precisam ser feitas.
1. Acesse dentro da pasta do projeto src/services/api.js  e siga as instruções para alterar a rota de requisições da 
aplicação, conforme o seu endereço de IP Local (há instruções no arquivo de como obter o ip local).

2. Acesse na raiz do projeto o arquivo package.json e altere em scripts a expressão "localhost", pelo seu endereço de IP Local, ou 
o mesmo em que serão realizada as requisições.
```bash
	"scripts": {
		"json-server": "json-server --watch --host localhost db.json",
```

Por fim, para rodar a aplicação, abra o terminal e execute o comando abaixo para inicializar o json server referente a API.
```bash
$	yarn json-server
```
Após, em outro terminal, para rodar a aplicação execute:
```bash
$	yarn start
```
Realizadas estas etapas, a aplicação está disponível para acesso via expo, podendo ser visualizada em uma virtual machine na sua máquina.

## Considerações

Agradeço a atenção ao projeto, qualquer dúvida, questionamento ou problema com o funcionamento ou execução do código, entre em contato.
