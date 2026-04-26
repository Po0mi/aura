import "./Footer.scss";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-container">

      <div className="footer-brand">
        <span className="footer-title">Understood</span>
        <p className="footer-tagline">
          The attraction dynamic, finally explained.
        </p>
      </div>

      <nav className="footer-links" aria-label="Footer">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </nav>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Understood. All rights reserved.
      </p>

    </div>
  </footer>
);

export default Footer;
