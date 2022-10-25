import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/collection">Collection</Link>
					</li>
					<li>
						<Link to="/product">Product</Link>
					</li>
					<li>
						<Link to="/phylosopy">Phylosopy</Link>
					</li>
					<li>
						<Link to="/shop">Shop</Link>
					</li>
					<li>
						<Link to="/offsale">Off sale</Link>
					</li>
				</ul>
			</nav>
  )
}