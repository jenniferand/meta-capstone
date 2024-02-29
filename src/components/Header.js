import { ReactComponent as Logo } from '../assets/littlelemonlogo.svg';

function Header(logo) {
    return (
      <header className="header-logo">
        <Logo alt="Logo" />
      </header>
    );
  }

export default Header;
