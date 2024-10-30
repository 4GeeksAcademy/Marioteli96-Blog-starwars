import React, { useEffect,useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardPersonaje } from "../component/cardPersonaje";
import { CardPlaneta } from "../component/cardPlaneta";
import { CardVehiculo } from "../component/cardVehiculo";


export const Home = () => {
	const {store, actions}= useContext(Context)
	useEffect(()=> {
		actions.getAllPersonajes()
		actions.getAllPlanetas()
		actions.getAllVehiculos()
		console.log(store.personajes)
		
	},[])
	console.log(store.personajes)
	
	return (
		<div className="home-container">
			<h1 className='card-name my-5'>Personajes</h1>
			
			<div className='d-flex flex-nowrap overflow-auto' style={{ scrollbarColor: 'black', scrollbarTrackColor: 'black', overflowX: 'auto' }}>
			{store.personajes.map((personaje) => {
				return(
					<CardPersonaje name={personaje.name}
					key={personaje.uid}
					id={personaje.uid}
					imageHeight="286px"
					/>
				)
			})}
			</div>
			<h1 className='card-name my-5'>Planetas</h1>
			<div className='d-flex flex-nowrap overflow-auto' style={{ scrollbarColor: 'black', scrollbarTrackColor: 'black', overflowX: 'auto' }}>
			
			
			{store.planetas.map((planeta) => {
				return(
					<CardPlaneta name={planeta.name}
					key={planeta.uid}
					id={planeta.uid}
					imageHeight="286px"/>
				)
			})}
			
			</div>
			<h1 className='card-name my-5'>Vehiculos</h1>
			
			<div className='d-flex flex-nowrap overflow-auto' style={{ scrollbarColor: 'black', scrollbarTrackColor: 'black', overflowX: 'auto' }}>
			{store.vehiculos.map((vehiculo) => {
				return(
					<CardVehiculo name={vehiculo.name}
					key={vehiculo.uid}
					id={vehiculo.uid}
					imageHeight="286px"
					/>
				)
			})}
			</div>
		</div>
	);
};
    