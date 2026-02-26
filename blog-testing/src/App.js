import blog from './blog.png';
import './App.css';
import Btn from './components/Btn';
import ModeToggler from './ModeToggler';
import LightSwitch from './LightSwitch';
/*import Nav from './components/Nav';*/
import { Route, Routes, Link, /*useNavigate*/ } from 'react-router-dom';
import Home from './components/Home';

function App() {
 /* const navigate = useNavigate(); // Hook to programmatically navigate to different routes */

  const time = new Date();
  const day = time.toLocaleString("en-US", { weekday: "long" }); 
  const morning = time.getHours() >= 6 && time.getHours() < 12;
  const afternoon = time.getHours() >= 12 && time.getHours() < 18;
  const evening = time.getHours() >= 18 && time.getHours() < 24;
  let dayMessage;

  if (day.toLowerCase() === "monday") {
    dayMessage = `Happy ${day}! Start your week off with a smile!`;
  } else if (day.toLowerCase() === "tuesday") {
    dayMessage = `It's ${day}! Keep going, you're doing great!`;
  } else if (day.toLowerCase() === "wednesday") {
    dayMessage = `Happy ${day}! You're halfway through the week!`;
  } else if (day.toLowerCase() === "thursday") {
    dayMessage = `It's ${day}! The weekend is almost here!`;
  } else if (day.toLowerCase() === "friday") {
    dayMessage = `Happy ${day}! The weekend is finally here!`;
  } else {
    dayMessage = `It's ${day}! Have a great day!`;
  };

  return (
    <>
    <div className="Blog">
      <header className="Blog-header">
        <img src={blog} className="blog-logo" alt="logo" />
        <a
          className="Blog-link"
          href="./Nav"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/*<Link className="Blog-link" to="/Nav"><h1>Welcome to my Blog Testing!</h1></Link>.*/}
          </a>
       <h1>{dayMessage}</h1>
        <h2>{morning ? "Great Day!" : afternoon ? "Good afternoon!" : evening ? "Good evening!" : "Hello!"}</h2>
        <h3>Scroll for more content!</h3>
      </header>
         <Link to="/"><h1>Welcome to the Blog</h1></Link>
         {/*<Link to="/Nav/*"><h1>Welcome to my Blog Testing!</h1></Link>*/}
         
        <Routes>
          <Route path="/" element={<Home />} /> 
          {/*<Route path="/Nav/*" element={<Nav />} />*/}
          
        </Routes>
        {/*<button onClick={() => navigate('/Nav/*')}>Go to Navigation</button>*/}
      <div>
        <Btn />
      <ModeToggler />
      <LightSwitch />
      </div>
    </div>
        </>
  );
}

export default App;
