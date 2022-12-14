import { Link } from "react-router-dom"
export default function Notfoundpage() {
    return (
        <body className="structure">
            <div>
                <h1>Error!!!</h1>
                <Link to = '/'> go home</Link>
            </div>
        </body>
    )
}