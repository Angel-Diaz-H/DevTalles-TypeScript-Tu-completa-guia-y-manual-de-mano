import { getPokemon } from "./generics/get-pokemon";

getPokemon(4)
    .then(resp => console.log(resp.name.toUpperCase()))
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizó el proceso'));