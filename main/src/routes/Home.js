import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div>
      <header>
        <nav class>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Bmi">BMI Test</Link>
            </li>
            <li>
              <Link to="/Map">Map</Link>
            </li>
            <li>
              <Link to="">Search</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Home;
