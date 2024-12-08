import "../styles/header.css";

function Header() {
	return (
		<aside>
			<nav className="container-navigation">
				<figure className="container-link">
					<img id="link-1" src="images/profile.png" alt="" />

					<img id="link-2" src="images/resume.png" alt="" />

					<img id="link-3" src="images/github.png" alt="" />
				</figure>
				<figure className="container-link-bottom">
					<img id="link-4" src="images/creation.png" alt="" />
					<img id="link-5" src="images/lune.png" alt="" />
				</figure>
			</nav>
		</aside>
	);
}

export default Header;
