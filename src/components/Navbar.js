import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navbar = () => {
    const history = useHistory();
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const handleLogoutClick = () => {
        localStorage.removeItem('isAuthenticated');
        history.push('/');
    }

    return (
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                {
                    isAuthenticated && <Link to="/" onClick={handleLogoutClick}>Logout</Link>
                }
                <Link to="/home">Home</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: '#35a6f1',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;