import React,{Component,useContext,useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


 export const DetallesVehiculo = () => {
  const {store, actions}= useContext(Context)
  const params = useParams()
	  useEffect(()=> {
		   actions.getVehiculo(params.id)
		
		
	  },[])
  console.log(store.vehiculo)
    return(
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">
          {store.vehiculo?.description}
        </p>
        <div className="card-text">
          <p>Nombre: {store.vehiculo?.properties?.name}</p>
          <p>Longitud:  {store.vehiculo?.properties?.length}</p>
          <p>Modelo: {store.vehiculo?.properties?.model}</p>
          <p>Pasajeros:  {store.vehiculo?.properties?.passengers}</p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}