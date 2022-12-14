import {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbums } from '../redux/actions';

const Albums = () => {
  const dispatch = useDispatch();
  const { albums } = useSelector((store) => store.albums);

  useEffect(() => {
    dispatch( fetchAlbums());
  }, [dispatch]);

  return (
    <div className="structure">
      <h1>Albums</h1>
      <div>
        {albums?.map((album) => {
          return (
            <Link
              key={album.id}
              to={`/user/${album.id}/albums`}
            >
             <li className="albumMark">{album.title}</li>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export { Albums };