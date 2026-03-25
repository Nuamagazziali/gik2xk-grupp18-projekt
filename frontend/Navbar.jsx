import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav>
      <Link to="/" className="logo">
        🎬 FilmShop
      </Link>

      <ul>
        <li><Link to="/">Alla filmer</Link></li>
        <li><Link to="/cart">🛒 Varukorg</Link></li>

        {isAdmin ? (
          <>
            <li><Link to="/products/new">Lägg till film</Link></li>
            <li><button className="nav-btn" onClick={handleLogout}>Logga ut</button></li>
          </>
        ) : (
          <li><Link to="/login">Admin login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
