import { Link, Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <>
            <header className='header'>
                <Link to="/" className="link">Users</Link>
                <Link to="/albums" className="link">Albums</Link>
            </header>
            <Outlet />
            <footer>
            <div className="line"></div>
            <div className="container">
            <p>Created by: Zhuravleva Daria</p>
            <p>BSU: 2022</p>
            </div>
            </footer>
        </>
    )
}