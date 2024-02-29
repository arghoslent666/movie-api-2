import { api_search, back, dinamich1, movieConatainerInfo, movieContainer, api_key, input } from "./main.js"
import createMovie from "./movie.js"

//Funcao para pesquisar um filme
export default async function searchMovie(){
    const value = input.value
    const searchMoviesUrl = `${api_search}?api_key=${api_key}&query=${value}`
    try{
        const resp = await fetch(searchMoviesUrl)
        const respJson = await resp.json()

        //limpa sempre o container com display grid para receber os filmes
        movieContainer.innerHTML = '';
        if(respJson.results.length === 0){
            dinamich1.textContent = `Resultados não encontrados para : '${value}'`;
            movieContainer.innerHTML = `<img class="error-img" src="./imgs/404-error-lost-in-space-animate.svg" alt="">
                <a class="attribute" href="https://storyset.com/online">Online illustrations by Storyset</a>
            `
        }else{
            //funcao para criar os filmes pesquisados
            respJson.results.forEach(movie =>createMovie(movie))
            dinamich1.textContent = `Resultados para : ${value}`
        }
        movieConatainerInfo.classList.add('hidde')
        movieContainer.classList.remove('hidde')
        dinamich1.style.display = 'block'
        back.style.display = 'none'
        input.value = ''
    }catch(err){
        console.log(`Ocorreu um erro na pesquisa de filmes ${err}`)
    }
}