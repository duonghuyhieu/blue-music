import React, { useContext } from 'react'
import { Songs } from '../Context'

export default function DetailSong() {
    const {song} = useContext(Songs)
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-[#0284C7] font-bold text-2xl'>Now playing</h2>
            <h2 className=' text-white text-3xl mt-5'>{song.name}</h2>
            <div className='w-[360px] m-auto mt-10'>
                <img className='w-full rounded-3xl' src={song.links.images[0].url} alt='avatar' />
            </div>
            <div className='flex justify-evenly items-center mt-10'>
            <img className='w-[120px] rounded-full' src={song.links.images[1].url} alt='avatar' />
            <span className='text-2xl text-white'>{song.author}</span>
            </div>
        </div>
    )
}