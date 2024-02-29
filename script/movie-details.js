import { movieConatainerInfo } from "./main.js";
import { api_key } from "./main.js";
import { api_info } from "./main.js";
import { img_path } from "./main.js";

// Função para exibir detalhes do filme
export default async function showMovieDetails(movieId) {
    const movieDetailsUrl = `${api_info}${movieId}?api_key=${api_key}&language=en-US`;
    
    try {
        movieConatainerInfo.innerHTML = `<img src="imgs/loading.svg" alt="">`
        const response = await fetch(movieDetailsUrl);
        const movieDetails = await response.json();
        
        // console.log(movieDetails)
        movieConatainerInfo.innerHTML = `
        <h1 class="details-inf-h1">Detalhes de ${movieDetails.title}</h1>
        <div class="card-movie-inf">
            <img src="${movieDetails.poster_path ? `${img_path}${movieDetails.poster_path}` : './imgs/image_not_found.png'}" alt="">
            <h1 class="title-inf">${movieDetails.title}</h1>
            <h4 style="padding-bottom: 8px;" class="tagline">${movieDetails.tagline}</h4>
            <div style="padding-bottom: 8px;" class="feedback">
                <i class="fa-solid fa-star star"></i>
                <span class="weight-span">${movieDetails.vote_average ? (movieDetails.vote_average).toFixed(1) : 'Não informado'}</span>
            </div>
            <div style="padding-bottom: 8px;" class="release-date">
                <i class="fa-solid fa-calendar-days"></i>
                <span class="weight-span">Ano : </span>
                <span class="year">${movieDetails.release_date ? formatYear(movieDetails.release_date,5,10,'-','/') + '/' + movieDetails.release_date.slice(0,4) : 'Não informado'}</span>
            </div>
            <div style="padding-bottom: 8px;" class="budget">
                <i class="fa-solid fa-wallet"></i>
                <span class="weight-span">Orcamento : </span>
                <span>${movieDetails.budget ? movieDetails.budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : 'Não informado'}</span>
            </div>
            <div style="padding-bottom: 8px;" class="revenue">
                <i class="fa-solid fa-dollar-sign"></i>
                <span class="weight-span">Receita : </span>
                <span>${movieDetails.revenue ? movieDetails.revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : 'Não informado'}</span>
            </div>
            <div style="padding-bottom: 8px;" class="runtime">
                <i class="fa-solid fa-clock"></i>
                <span class="weight-span">Duracao : </span>
                <span>${movieDetails.runtime ? movieDetails.runtime + ' minutos' : 'Não informado'}</span>
            </div>
            <div class="description">
                <div style="padding-bottom: 8px;">
                    <i class="fa-regular fa-newspaper"></i>
                    <span class="weight-span">Descricao : </span>
                </div>
                <p>${movieDetails.overview ? movieDetails.overview : 'Não informado'}</p>
            </div>
            <div class="genres">
                ${movieDetails.genres.map(item=>createGenres(item.name).outerHTML).join('')}
            <div/>
        </div>
        `  
        //retornando um array de elementos,dentro de string `${}` ele ficam=[object HTMLDivElement] por isso o uso do
        //outerHTML para ter a representacao deles em elementos html,e o join para transformar em string
        //pois o map retorna um array de elementos
    } catch(err) {
        console.log(`Ocorreu um erro na promise ${err}`);
    }

    //Funcao para criar a div de generos do filme
    function createGenres(genre){
        const genreDiv = document.createElement('div')
        genreDiv.classList.add('genre-box')
        genreDiv.textContent = genre
        return genreDiv
    }

    function formatYear(str,l1,l2,v1,v2){
        return str.slice(l1,l2).replace(v1,v2)
    }
}