import React,{Component,useContext,useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


 export const DetallesPlaneta = () => {
  const {store, actions}= useContext(Context)
  const params = useParams()
	useEffect(()=> {
		actions.getPlaneta(params.id)
		
		
	},[])
  console.log(store.planeta)
    return(
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">
          {store.planeta?.description}
        </p>
        <div className="card-text">
          <p>Nombre: {store.planeta?.properties?.name}</p>
          <p>Clima:  {store.planeta?.properties?.climate}</p>
          <p>Diametro: {store.planeta?.properties?.diameter}</p>
          <p>Gravedad:  {store.planeta?.properties?.gravity}</p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}