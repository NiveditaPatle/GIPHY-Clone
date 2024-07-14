import { useEffect, useState } from "react"
import { GifState } from "../context/gif-context";
import Gif from "../components/gif";

const Favorites = () => {

  const [favoriteGIFs, setFavoriteGIFs] = useState([]);

  const { gf, favorites } = GifState();

  const fetchFavoriteGIFs = async () => {
    const {data: gifs} = await gf.gifs(favorites);
    setFavoriteGIFs(gifs);
  };

  useEffect(() => {
    fetchFavoriteGIFs();
  }, []);

  return (
    <div>
      <span className="faded-text">My Favorite</span>
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-2">
        {
          favoriteGIFs.map((gif) => (
            <Gif gif={gif} key={gif.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Favorites
