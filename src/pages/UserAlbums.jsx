import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {selectUsers} from '../redux/usersSelectors';
import useFetch from '../redux/useFetch';
import {fetchUserViaID} from '../redux/usersActions';
import {fetchAlbumsViaUserID} from '../redux/albumsActions';
import {selectAlbums} from '../redux/albumsSelectors';
import { Link } from 'react-router-dom';
import {useEffect, useState } from 'react';


export default function UserAlbums() {
    const { id } = useParams()
    useFetch(fetchUserViaID(id));
    useFetch(fetchAlbumsViaUserID(id));
    const albums = useSelector(selectAlbums);
    const [user, setUser] = useState(null)


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((json) => setUser(json))
    }, [id])
    
    return (
        <>
        {user && (
        <body className="structure">
            <div>
            <h2>User</h2>
                    <h3>{user.name}</h3>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Site: {user.website}</p>
            </div>
            <h2>Albums</h2>
            {albums.map((alb) => {
                return (
                    <Link
                    key={alb.id}
                    to={`/user/${alb.id}/albums`}
                  >
                   <li className="albumMark">{alb.title}</li>
                  </Link>
                );
            })}
        </body>
        )}
        </>
    );
}

