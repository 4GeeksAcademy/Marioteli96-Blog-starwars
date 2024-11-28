import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPersonaje = (props) => {
    const { store, actions } = useContext(Context);

    const handlerAddToFavorite = (name) => {
        console.log("Favorito agregado:", name);
        actions.addFavorito(name);
    };

    return (
        <div className="card col-2 m-2" key={props.id}>
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`}
                className="card-img-top"
                alt="Character image"
            />
            <div className="card-body">
                <h5 className="card-text">{props.name}</h5>
                <div className="card-text d-flex justify-content-between align-items-center">
                    <Link className="btn btn-primary" to={`/detalles/${props.id}`}>
                        Ver personaje
                    </Link>
                    <button
                        className="heart-button"
                        onClick={() => handlerAddToFavorite(props.name)}
                    >
                        <i className="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
