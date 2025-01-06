const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <a href="/profile">Profile</a>
                <div className="nav-button">
                    <button>Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;