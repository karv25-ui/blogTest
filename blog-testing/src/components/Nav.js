function Nav(props) {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                <a href="./Nav.js">Home</a>
                {props.home}
                </li>
                <li>{props.articles}</li>
                <li>{props.about}</li>
                <li>{props.contact}</li>
            </ul>
        </nav>
    );
};

export default Nav;