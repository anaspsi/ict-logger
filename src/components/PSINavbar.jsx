import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function PSINavbar({ selectedNav, onClickNav }) {
    const navigate = useNavigate()
    function handleSignout() {
        if (confirm('Are you sure ?')) {
            localStorage.removeItem('token')
            navigate('/')
        }
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ICT Logger</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={selectedNav == 'home' ? 'nav-link active' : 'nav-link'} onClick={() => onClickNav('home')}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={selectedNav == 'about' ? 'nav-link active' : 'nav-link'} onClick={() => onClickNav('about')}>About</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleSignout}>Sign out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}