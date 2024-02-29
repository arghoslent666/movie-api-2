import {
    logo,
    movieContainer,
    movieConatainerInfo,
    back,
    dinamich1,
    topMoviesUrl,
    modalIconSearch,
    menuBox,
    searchIcon,
    input
} 
from "./main.js";

import topMovies from "./top-movies.js";
import searchMovie from "./search-movie.js";


export default class AddEvents{
    constructor(){
        this.events()
    }

    events(){
        
        //Quando clicado na logo a aplicacao me retorna para a area princiapal que eh a top movies
        logo.addEventListener('click',()=>{
            //Por mais que a logo renderiza o top filmes,quando o usuario estiver no meio da rolagem em top filmes
            //ele pode clicar novamente na logo q mandara-ele(a) para o inico da aba de filmes do top filmes
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            movieContainer.classList.remove('hidde');
            movieConatainerInfo.classList.add('hidde');
            back.style.display = 'none'

            //Quando eu estou vendo a area de inf quando eu clico de novo para voltar ele da um vazio
            //da div inf para ela n apecer la em baixo perto do footer
            movieConatainerInfo.innerHTML = ''
            dinamich1.textContent = 'Top Filmes'
            dinamich1.style.display = 'block'

            topMovies(topMoviesUrl)
        })

        //Icone de busca para chamar o modal em aparelhos mobile
        modalIconSearch.addEventListener('click',()=>{
            if(window.innerWidth <= 600){ 
                menuBox.style.display = 'block'
                menuBox.classList.add('menu-box-active')
                searchIcon.style.display = 'block'
                input.style.display = 'block'
                input.focus()
            }
        })

        //Quando clicar nele em aparelhos mobile, ele desaparece com o fundo,icone de pesquisa,input e a div pai
        //deles, e por fim chama a funcao de pesquisa de filmes 
        searchIcon.addEventListener('click',()=>{
            searchMovie()
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            if(window.innerWidth <= 600){
                menuBox.style.display = 'none'
                menuBox.classList.remove('menu-box-active')
                searchIcon.style.display = 'none'
                input.style.display = 'none'
            }
        })

        //Clique para desaparecer a area de pesquisa em aparelhos mobile
        document.addEventListener('click',(e)=>{
            if(e.target.classList.contains('menu-box-active')){
                e.target.classList.remove('menu-box-active')
                menuBox.style.display = 'none'
                searchIcon.style.display = 'none'
                input.style.display = 'none'
            }
        })

        //Quando clicado no enter ele pesquisa o filme e tbm faz as mudancas em aparelhos mobile
        document.addEventListener('keyup',({key})=>{
            if(key === 'Enter'){
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                searchMovie()
                if(window.innerWidth <= 600){
                    menuBox.style.display = 'none'
                    menuBox.classList.remove('menu-box-active')
                    searchIcon.style.display = 'none'
                    input.style.display = 'none'
                }
            }
        })

        //Quando clicado no batao de 'go back' na secao de inf ele volta a area de pesquisa ou topFilmes dependendo
        //daonde o usuario parou
        back.addEventListener('click',()=>{
            movieConatainerInfo.classList.add('hidde');
            movieContainer.classList.remove('hidde');
            back.style.display = 'none'
            dinamich1.style.display = 'block'
        })

    }
}