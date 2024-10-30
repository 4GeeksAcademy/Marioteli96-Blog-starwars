import React,{Component,useContext,useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


 export const DetallesPersonaje = () => {
  const {store, actions}= useContext(Context)
  const params = useParams()
	useEffect(()=> {
		actions.getPersonaje(params.id)
		
		
	},[])
  console.log(store.personaje)
    return(
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">
          {store.personaje?.description}
        </p>
        <div className="card-text">
          <p>Altura: {store.personaje?.properties?.height}</p>
          <p>Peso:  {store.personaje?.properties?.mass}</p>
          <p>Color de pelo: {store.personaje?.properties?.hair_color}</p>
          <p>Color de ojos:  {store.personaje?.properties?.eye_color}</p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}