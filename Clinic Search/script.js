// JavaScript source code
let datosInfo = []
const traerDatos = () =>{
    const xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'HospitalesAntioquia.json', true);
	xhttp.send();
	xhttp.onreadystatechange = function(){
	
		if(this.readyState == 4 && this.status == 200){
		
			let datos = JSON.parse(this.responseText);
			console.log(datos);
            			
			datos.forEach(dato =>{
				let datoInfo = {
					posicion: {lat:parseFloat(dato.punto.latitude), lng:parseFloat(dato.punto.longitude)},
					nombre: dato.nombre_sede,
					direccion: dato.direcci_n,
					telefono: dato.n_mero_tel_fono


				}
				datosInfo.push(datoInfo)
				console.log(datosInfo)
			})

			if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition(usuarioUbicacion => {
					let ubicacion = {
						lat:usuarioUbicacion.coords.latitude,
						lng:usuarioUbicacion.coords.longitude
					}
					dibujarMapa(ubicacion)
				})
			}

		}

	}

}

const dibujarMapa = (obj) =>{

var markers = [];

	let mapa = new google.maps.Map(document.getElementById('map'),{
		center:obj,
		zoom:4
	})

	let marcadorUsuario = new google.maps.Marker({
		position:obj,
		title:'Tu ubicacion',

	})

	marcadorUsuario.setMap(mapa)
	
	var markerIcon = {
		url: 'images/hospital.png',
		size: new google.maps.Size(40, 60), 
		origin: new google.maps.Point(0,0), 
		anchor: new google.maps.Point(20, 60)
	}


	let marcadores = datosInfo.map(dato => {
		return new google.maps.Marker({
			position: dato.posicion,
			title:dato.nombre,
			direccion:dato.direccion,
			telefono:dato.telefono,
			map:mapa
			//icon : markerIcon
		})
	})

	
	let marcadorPrueba = new google.maps.Marker({
		position: {lat:4.564690 , lng:-74.165017 },
		title:"Prueba",
		map:mapa
	})

	

	var indice = 0;
	for(let item of marcadores){
		attachSecretMessage(item, "nombre: " + datosInfo[indice].nombre + "<br>" + "direccion: " + datosInfo[indice].direccion
		 + "<br>" + "Telefono: " + datosInfo[indice].telefono+"<br>"+ "<a href='http://localhost/Servisalud/#/'>Cita Medica");
		indice++;
		markers.push(marcadores);
	}
	
	var markerCluster = new MarkerClusterer(map, markers);

	function attachSecretMessage(marc, msj) {
			var infowindow = new google.maps.InfoWindow({
			content: msj
		});
	
		marc.addListener('click', function(){
		infowindow.open(marc.get('map'), marc);
		});
	}
}

traerDatos()