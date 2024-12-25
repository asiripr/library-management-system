const Sidebar = () => {
return (
    <aside className="sidebar">
        <ul>
            <li><a href="/books">Books</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/borrow">Borrow</a></li>
        </ul>
    </aside>
);
};

export default Sidebar;