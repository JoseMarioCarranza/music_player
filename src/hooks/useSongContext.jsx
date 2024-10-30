import { useContext } from 'react';
import { SongContext } from '@/context/SongContext'

export const useSongContext = () => {
    const context = useContext(SongContext)
    if (!context) {
        throw new Error('useSongContext must be used within a SongContextProvider')
    }
    return context
}