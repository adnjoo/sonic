import {useRecoilValue} from 'recoil';
import {playlistState} from '../atoms/playlistAtom';

function Songs() {
    const playlist = useRecoilValue(playlistState);
    
    function renderNames () {
        if(playlist){
            return playlist.tracks.items.map(x=>(
                <div>
                    {x.track.name}
                </div>
                ))
        }
        return (
            'no playlist'
        )
    }
    return (
        <div className='text-white'>
            {renderNames()}
        </div>
    );
}
 
export default Songs
