import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";

function Songs() {
  const playlist = useRecoilValue(playlistState);

  function renderNames() {
    if (playlist) {
      return playlist.tracks.items.map((track, i) => (
        <div>
          <Song key={track.track.id} track={track} order={i} />
        </div>
      ));
    }
    return (
      <a href='/login'>
        Click to login
      </a>

    )
  }
  return <div className="px-8 flex flex-col space-y-1 pb-28 text-white">{renderNames()}</div>;
}

export default Songs;
