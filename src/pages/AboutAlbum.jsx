import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UserLinkBack from "./UserLinkBack";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../redux/actions';

export default function Photopage() {
  const { idAlbums } = useParams();
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${idAlbums}`)
      .then((response) => response.json())
      .then((json) => setTitle(json));
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const dispatch = useDispatch();
  const { photos } = useSelector((store) => store.photos);

  useEffect(() => {
    dispatch( fetchPhotos());
  }, [dispatch]);


  if (loading) {
    return <div>Loading....</div>;
  } else {
    return (
      title && (
        <>
          <body className="structure">
            <h2>{title.title}</h2>
            <p>
              Created by:
              <UserLinkBack userId={title.userId} />
            </p>
            <div className="content">
            {photos?.map((photo) => (
                        <Link albumsTitle={photo.title}
                        key={photo.id}
                        to={`/user/${photo.id}/albums`}>
                          <div className="image">
                          <img src={photo.url}></img>
                          </div>
                        </Link>
                        
                    ))}
                  
            </div>
          </body>
        </>
      )
    );
  }
}
