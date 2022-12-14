import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function UserLinkBack({ userId }) {
    const [userLink, setUserLink] = useState(null)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => response.json())
            .then((json) => setUserLink(json))
    }, [])
    return (
        <>
            {userLink && (
                <>
                    <Link to={`/user/${userId}`}>{userLink.name}</Link>
                </>
            )}
        </>
    )
}