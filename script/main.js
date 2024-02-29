export const api_key = `dd2b7af887e2f55f9765d2155aaea378`
export const api_search = `https://api.themoviedb.org/3/search/movie`
export const api_info = `https://api.themoviedb.org/3/movie/`
export const img_path = `https://image.tmdb.org/t/p/w400/`
export const topMoviesUrl = `${api_info}popular?api_key=${api_key}&language=en-US&page=1`

export const movieContainer = document.querySelector('.movie-box')
export const movieConatainerInfo = document.querySelector('.movie-box-inf')
export const logo = document.querySelector('.logo')
export const dinamich1 = document.querySelector('#h1-center')
export const back = document.querySelector('#back')

export const modalIconSearch = document.querySelector('#pre-search-icon')
export const input = document.querySelector('.input-search')
export const searchIcon = document.querySelector('#search-icon')
export const menuBox = document.querySelector('.menu-box')
export const searchBox = document.querySelector('.search-box')
export const container = document.querySelector('.container')

import topMovies from "./top-movies.js"
import AddEvents from "./addEvents.js"

topMovies(topMoviesUrl)
new AddEvents()