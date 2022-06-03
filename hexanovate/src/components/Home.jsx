import { useEffect, useState } from 'react'
import '../styles/Home.css'
export const Home = () => {

const [movies,setMovies] =useState([]);
const [filter,setFilter] = useState([])

useEffect(() => {
    fetchMovies();
},[])

const fetchMovies = () => {
    fetch ("https://hexanovate-1oc3v5uf6-thephenom1708.vercel.app/api/movies")
    .then((res) =>  res.json())
    .then((res) => {
      console.log(res)
      setMovies(res)
      setFilter(res)  
    })
};
console.log(movies)
    return(
        <>
            <h1>Movies</h1>
            
            <div className='main' >

                {filter.map((el) => {
                    return ( 
                    <>
                        <div className='container'>
                           <div className='img'>
                               <img src = {el.poster} alt ="images"></img>
                           </div>
                           <span>{el.title}</span>
                           <span>{el.genre}</span>
                           <span>{el.imdbRating}</span>
                           <span>{el.released}</span>

                       </div>
                       
                       
                    </>
                    )
                })}
            </div>
            
        </>
    )
}