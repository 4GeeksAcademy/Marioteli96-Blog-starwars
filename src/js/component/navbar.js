import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);


	return (
		<nav className="navbar navbar-dark bg-black mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
						style={{ width: "120px", height: "60px" }}
					/>
				</span>
			</Link>
			<div className="ml-auto" style={{ marginRight: "50px" }}>
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						style={{
							position: "relative",
							left: "-50px", // Mueve el botón a la izquierda
						}}
					>
						Favoritos
					</button>
					<ul
						className="dropdown-menu dropdown-menu-dark"
						style={{
							right: "auto",
							left: "-50px", // Alinea el dropdown justo debajo del botón
							top: "100%", // Asegura que aparezca debajo del botón
							marginTop: "5px", // Añade un pequeño espacio entre el botón y el menú
						}}
					>
						{store.favoritos.length > 0 ? (
							store.favoritos.map((favorito, index) => (
								<li key={index} className="d-flex justify-content-between align-items-center">
									<a className="dropdown-item active" href="#">
										{favorito}
									</a>
									<button className="btn btn-danger btn-sm" onClick={() => actions.removeFavorito(index)}>
										X
									</button>
								</li>
							))
						) : (
							<li className="dropdown-item">No hay favoritos</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
