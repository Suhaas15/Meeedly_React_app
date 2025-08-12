import {Link} from "react-router-dom";
import logo from "../../Asset/Logo/meeedlyLogo.png";
import "../../Style/Components/Navigation/Navigation.css";

const Navigation = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="Meeedly Logo" style={{ width: '100px', height: 'auto', margin: '16px 0', verticalAlign: 'middle' }} />
                <span style={{ marginLeft: '12px', verticalAlign: 'middle' }}>React Guide</span>
            </Link>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/settings" className="nav-link">Settings</Link>
            </div>
        </nav>
    );
};

export default Navigation;