import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Albums} from './pages/Albums'
import {Users} from './pages/Users'
import Layout from './pages/Layout'
import UserAlbums from './pages/UserAlbums'
import Photopage from './pages/AboutAlbum'
import Notfoundpage from './pages/Notfoundpage'
import {createRoutesFromElements, Route} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<Layout />}>
    <Route index element={<Users />} />
    <Route path="/albums" element={<Albums />} />
    <Route path="/user/:id" element={<UserAlbums />} />
    <Route
        path="/user/:idAlbums/albums"
        element={<Photopage />}
    />
    <Route path="*" element={<Notfoundpage />} />
</Route>



  )
);

function App() {
  return (
    <div className="Content">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
