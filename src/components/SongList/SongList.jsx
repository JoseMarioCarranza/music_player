import { useState, useEffect } from 'react'
import canciones from '@/assets/listaCanciones.json'
import './SongList.css'

const SongList = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setList(canciones)
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <section className='row-container'>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : list.map((song) => (
                        <div key={song.id} className='row-song'>
                            <h3>{song.title}</h3>
                            <h4>{song.artist.name}</h4>
                        </div>
                    ))
            }
        </section>
    )
}

export default SongList