import { ReactComponent as Logo } from '../assets/littlelemonlogo.svg';
import Nav from './Nav';

function Header() {
    return (
      <header className="header">
        <Logo alt="Logo" className="logo"/>
        <Nav/>
      </header>
    );
  }

export default Header;
