import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const Dropdown = () => {

    useEffect(() => {
        actions.getFavoritesList()
    }, [])

    const { store, actions } = useContext(Context);

    const favoriteGenerator = store.favorite?.map((favorite, i) => {
        return (
            <li key={i}>{favorite}</li>
            )
    })

    return (
        <div>
            <li className="nav-item dropdown col-12 col-md-auto text-center">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Favorites</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">  {favoriteGenerator}</a></li>
                </ul>
            </li>
        </div>
    );
}

export default Dropdown;