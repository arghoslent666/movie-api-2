import { movieContainer } from "./main.js";
import createMovie from "./movie.js";

//Funcao para exibir os top filmes
export default async function topMovies(url){
    try{
        const response = await fetch(url)
        const respJson = await response.json()
        
        //limpa sempre o container com display grid para receber os filmes
        movieContainer.innerHTML = '';
        // console.log(respJson)
        respJson.results.forEach(movie =>createMovie(movie))

    }catch(err){
        console.log(`Ocorreu um erro na promise ${err}`)
    }
}