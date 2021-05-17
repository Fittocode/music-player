import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ songs, setSongs, setCurrentSong, audioRef, isPlaying, libraryStatus }) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Playlist</h2>
            <div className="library-songs">
                {songs.map((song) =>
                    <LibrarySong setCurrentSong={setCurrentSong} song={song} songs={songs} id={song.id} key={song.id} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} />
                )}
            </div>
        </div>
    )
}

export default Library