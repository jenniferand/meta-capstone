import { Link } from 'react-router-dom';

function Nav() {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <Link to="#" className="disabled">About</Link>
          </li>
          <li>
            <Link to="#" className="disabled">Order Online</Link>
          </li>
          <li>
            <Link to="#" className="disabled">Login</Link>
          </li>
        </ul>
      </nav>
    );
  }

export default Nav;
