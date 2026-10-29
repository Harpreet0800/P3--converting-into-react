
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Explore</h3>
        <p>Home</p>
        <p>Questions</p>
        <p>Articles</p>
        <p>Tutorials</p></div>
      <div className="footer-column">
        <h3>Support</h3>
        <p>FAQs</p>
        <p>Help</p>
        <p>Contact Us</p>
      </div>
<div className="footer-column">
  <h3>Stay Connected</h3>
  <p><FaFacebook /> Facebook: Rasmalai@0800</p>
  <p><FaInstagram /> Instagram: harpreet_0800</p>
  <p><FaTelegram /> Telegram: Rasmalai@0800</p>
</div>
      <div className="footer-bottom">
        <h3>DEV@Deakin 2022</h3>
        <p>Privacy Policy </p>
            <p>Terms</p> 
            <p>Code of Conduct</p>
      </div>

    </footer>
  );
}

export default Footer;