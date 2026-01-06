function Nav(props) {
    return (
        <nav className="main-nav">
            <ul>
                <li>Home</li>
                <li>{props.articles}Articles</li>
                <li>{props.about}About</li>
                <li>{props.contact}Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;