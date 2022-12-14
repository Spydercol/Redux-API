import {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../redux/actions';

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch( fetchUsers());
  }, [dispatch]);

  return (
    <body className="structure">
    <h1>Our users</h1>
      <div>
        {users?.map((user) => {
          return (
            <Link
              key={user.id}
              to={`user/${user.id}`}
            >
             <li className="albumMark">{user.name}</li>
            </Link>
          );
        })}
      </div>
      </body>
  );
};

export { Users };