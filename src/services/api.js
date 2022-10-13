/*  --------------------------- INSTRUÇÕES ------------------------------------

Para obter os dados corretamente da Api caso esteja utilizando um virtual device,
as requisições precisam ser feitas em um endereço diferente de localhost,
portanto, insira o seu endereço que está hospedada a api, no caso, de utilizar
ambas em sua máquina, substitua "localhos" pelo seu endereço de IP LOCAL.

No caso de seu endereço de ip ser: 10.168.132.22

ex. Substitua:  export const api = "localhost:3000/funcionarios";
    por:        export const api = "10.168.132.22:3000/funcionarios";

------------------------------------------------------------------------------
*/

export const api = "http://192.168.237.65:3000/funcionarios";

// export const api = "localhost:3000/funcionarios";

/* 

Para descobrir seu endereço de IP LOCAL no Windows, siga essas instruções:

1. Abra seu “prompt de comando”;
2. Digite o comando “ipconfig” e digite “Enter” no teclado;
3. Procure por “Endereço IPv4”;

O número que aparecer nesse campo é o seu IP local.

*/
