import MovieCard from "../components/MovieCard";
import "../css/Home.css";

import {useState} from "react"
function Home () {
    cont [searchQuery, setSearchQuery]= useState("");
    const movies = [
        {id:1, title: "Harry Potter & the Philosopher's stone", release_date:"2001"},
        {id:2, title: "Harry Potter & the chamber of secrets", release_date:"2002"},
        {id:3, title: "Harry Potter & the prisoner of azkaban ", release_date:"2004"},
        {id:4, title: "Harry Potter & the goblet of fire", release_date:"2005"},

    ];
    const handleSearch = (e)=> {
        e.preventDefault()
        alert (searchQuery)
};

    return ( 
        <div className= "home">
            <form onSubmit = {handleSearch} className= "search-form">
                <input
                 type= "text"
                 placeholder= "search for movies you wanna see!!" 
                 className= "search-input"
                 value= {searchQuery}
                 onChange = {(e)=>  setSearchQuery(e.target.value)}
                 />
                 <button
                  type = "submit"
                   className = "search-button">Search</button>
            </form>

        <div className= "movies-grid">
            { movies.map((movie) =>(
                movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie = {movie} key = {movie.id} />
                )
        ))}
    </div>
    </div>
    );
}
export default Home