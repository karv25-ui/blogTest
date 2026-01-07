function Nav(props) {
    return (
        <nav className="main-nav">
            {/* Navigation bar for the blog application */} 
            <ul>
                {/* Navigation links (Each link directs to a specific page) */}
                <li><a href="/">Home</a></li>
                <li><a href="/articles">Articles</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                {/* Additional navigation items can be added here */}
            </ul>
        </nav>
    );
};

export default Nav;