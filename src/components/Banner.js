import { useState, useEffect } from 'react'
import instance from '../axios'
import { IMG_API } from '../requests'

function Banner({fetchUrl}) {
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await instance.get(fetchUrl)
            const results = data.results
            
            return setMovie(
                results[Math.floor(Math.random() * results.length - 1)]
            ) 
        }
        fetchMovies();
    }, [fetchUrl])
    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n) + '...' : str
    }
    return (
        <div style={{
            backgroundImage: `url(${IMG_API + movie?.backdrop_path})`,
            backgroundPosition: 'top top',
            backgroundSize: 'cover',
            zIndex: '-1',
        }} className="h-[500px] flex flex-col justify-center">
            <div className="px-6 space-y-3">
                <p className="text-3xl text-white">{movie?.title || movie?.name}</p>
                <div className="flex space-x-3">
                    <button className="button" >Play</button>
                    <button className="button" >My List</button>
                </div>
                <p className="text-white text-sm font-semibold max-w-xs ">
                    {truncate(movie?.overview, 150)}
                </p>
            </div>
        </div>
    )
}

export default Banner
