import {useState, useEffect} from 'react'
import instance from '../axios'
import { IMG_API } from '../requests'

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await instance.get(fetchUrl)
            const results = data.results
            
            return setMovies(results) 
        }
        fetchMovies();
    }, [fetchUrl])
    return (
        <div className=" my-4 last:mb-0">
            <p className='text-2xl text-white font-bold mx-4' >{title}</p>
            <div className="flex overflow-x-scroll py-4 space-x-3 scrollbar-hide">
                {movies.map((movie) => (
                    <img 
                        key={movie.id} 
                        className="max-h-60 max-w-[180px] w-full object-contain first:ml-4" 
                        src={isLargeRow ? IMG_API + movie.poster_path : IMG_API + movie.backdrop_path} 
                        alt={movie.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
