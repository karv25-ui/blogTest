import blog from './blog.png';
function App() {

  return (
    <div className="Blog">
      <header className="Blog-header">
     <img src={blog} className="blog-logo" alt="logo"/>
     <a
        className="Blog-link"
        href="https://drive.google.com/file/d/1yLcbomX8iGfkw_2wvPvBCQNxFkCzSVhE/view"
        target="_blank"
        >
          <h1>Welcome to my blog testing!</h1>
        </a>
     </header>
     
    </div>
  );
}

export default App;
