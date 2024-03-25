import footerLogo from '../assets/footerlogo.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={footerLogo} alt="Footer Logo" class="footer-logo" />
      <div class="footer-text-content">
        <nav className='footer-nav'>
          <h1>Navigation</h1>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/orderonline">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
        <section className="contact-info">
          <h1>Contact</h1>
          <p>Adrian</p>
          <p>Little Lemon</p>
          <p>926 Dunlop Ave</p>
          <p>+17088488155</p>
        </section>
        <section className="social-links">
          <h1>Social Media</h1>
          <ul>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
              </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
              </li>
            <li>
              <a href="https://www.twitter.com">X</a>
              </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
