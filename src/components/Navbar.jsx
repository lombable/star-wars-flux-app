import Dropdown from "./Dropdown";
import { useHistory } from "react-router-dom";

const Navbar = () => {

		let history = useHistory();
	  
		const handleClick = (e) => {
			if (e.target.name) {
				switch (e.target.name) {
					case "home":
						history.push("/home");	
						break;
					case "characters":
						history.push("/characters");
						break;
					case "planets":
						history.push("/planets");
						break;
					default:
						history.push("/home");
						break;
				}
			}
		}



	return (
		<nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/home">
					<img src={process.env.PUBLIC_URL + '/img/Star wars logo.png'} style={{height: "5vh", width: "5vw"}}/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNav">
					<ul className="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0">
						<li className="nav-item col-12 col-md-auto">
							<a
								name="home"
								className="nav-link p-2 active text-center"
								aria-current="page"
								onClick={handleClick}>
								Home

							</a>
						</li>
						<li className="nav-item col-12 col-md-auto text-center">
							<a 
							name="characters"
							className="nav-link p-2"
							 onClick={handleClick}>
								Characters
							</a>
						</li>
						<li className="nav-item col-12 col-md-auto text-center">
							<a 
							name="planets"
							className="nav-link p-2"
							onClick={handleClick}>
								Planets
							</a>
						</li>
						<Dropdown/>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;