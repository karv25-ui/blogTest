import blog from './blog.png';
import './App.css';
import Btn from './components/Btn';
import Articles from './ui/Articles';
import ModeToggler from './ModeToggler';

function App() {

  return (
    <div className="Blog">
      <header className="Blog-header">
     <img src={blog} className="blog-logo" alt="logo"/>
     <a
        className="Blog-link"
        href="./Nav.js"
        target="_blank"
        rel="noopener noreferrer"
        >
          <h1>Welcome to my Blog Testing!</h1>
        </a>
     </header>
      <Btn />
      <Articles className="blog-articles"
      /> 
      <ModeToggler /> 
    </div>
  );
}

export default App;
