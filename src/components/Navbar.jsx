import "./Navbar.css";
import reactLogo from "../assets/react.svg";

function Navbar() {
  return (
    <nav>
      <ul>
        <img src={reactLogo} alt="React Logo" />
        <li>HOME</li>
        <li>USERS</li>
        <li>ABOUT</li>
      </ul>
    </nav>
  );
}

export default Navbar;
