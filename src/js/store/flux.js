const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes:[],
			personaje:[],
			planetas:[],
			planeta:[],
			vehiculos:[],
			vehiculo:[],
			favoritos:[],
			likes:0
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getAllPersonajes : () => {
				fetch(`https://www.swapi.tech/api/people/`)
					.then(res => res.json())
					.then((data) => {
						console.log(data.results);
						setStore({personajes:data.results});
					}) 
					.catch(err => console.error(err))
					},
			getPersonaje : (id) => {
				fetch(`https://www.swapi.tech/api/people/`+id,)
					.then(res => res.json())
					.then((data) => {
						console.log(data);
						setStore({personaje:data.result});
					}) 
					.catch(err => console.error(err))
					},
			getAllPlanetas : () => {
						fetch(`https://www.swapi.tech/api/planets/`)
					.then(res => res.json())
					.then((data) => {
						console.log(data.results);
						setStore({planetas:data.results});
					}) 
					.catch(err => console.error(err))
					},
			getPlaneta : (id) => {
					fetch(`https://www.swapi.tech/api/planets/`+id,)
						.then(res => res.json())
						.then((data) => {
							console.log(data);
							setStore({planeta:data.result});
						}) 
						.catch(err => console.error(err))
						},
			getAllVehiculos : () => {
							fetch(`https://www.swapi.tech/api/vehicles/`)
						.then(res => res.json())
						.then((data) => {
							console.log(data.results);
							setStore({vehiculos:data.results});
						}) 
						.catch(err => console.error(err))
						},
			getVehiculo : (id) => {
							fetch(`https://www.swapi.tech/api/vehicles/`+id,)
								.then(res => res.json())
								.then((data) => {
									console.log(data);
									setStore({vehiculo:data.result});
								}) 
								.catch(err => console.error(err))
								},
			addFavorito :	(favorito)	=> {
				const store = getStore()
				const newFavorito = [...store.favoritos, favorito]
				setStore({favoritos:newFavorito})
				
				
			},	
			removeFavorito: (index) => {
				const newFavoritos = getStore().favoritos.filter((_,i) => i !== index);
				setStore({ favoritos: newFavoritos });
			},			
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
