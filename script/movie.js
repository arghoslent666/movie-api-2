import { movieContainer } from "./main.js";
import { movieConatainerInfo } from "./main.js";
import { img_path } from "./main.js";
import { back } from "./main.js";
import { dinamich1 } from "./main.js";
import showMovieDetails from "./movie-details.js";

//Funcao para cria a box do filme
export default function createMovie(details) {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    movieContainer.appendChild(card);

    card.innerHTML = `
        <img class="movie-img" src="${details.poster_path ? `${img_path}${details.poster_path}` : './imgs/image_not_found.png'}" alt="">
        <h3 class="title">${details.title}</h3>
        <div class="spefs">
            <div class="feedback">
                <i class="fa-solid fa-star star"></i>
                <span>${details.vote_average ? details.vote_average.toFixed(1) : 'N/Informado'}</span>
            </div>
            <span>Ano: ${details.release_date ? details.release_date.slice(0,4) : 'N/Informado'}</span>
        </div>
        <button class="details" data-id="${details.id}">Detalhes</button>
    `;
    
    const detailsButton = card.querySelector('.details');
    
    detailsButton.addEventListener('click', () => {
        //Por conta que o header eh fixed ele fica solto na tela,e a div main tem um top para mostrar o conteudo dele,mas quando 
        //o usuario esta no meio da secao de top filmes e clica em detalhes o scroll nao reinicia deixando 125px do top do main
        //invisivel,para arrumar isso basta setar o scroll para 0 de novo mostrando o conteudo desde o inicio do height 0 do main 
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        //setando o scroll para 0, behavior para deixar o movimento 'smooth' ou clean

        movieContainer.classList.add('hidde')
        movieConatainerInfo.classList.remove('hidde')
        back.style.display = 'block'
        dinamich1.style.display = 'none'
        showMovieDetails(detailsButton.dataset.id);
    });
}