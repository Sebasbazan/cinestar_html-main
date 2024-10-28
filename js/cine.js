const getCine =async() => {
    const id = new URLSearchParams(window.location.search).get('id')
    const data = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}`)
    const data2 = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/1/tarifas`)
    const data3 = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}/peliculas/${id}`)
    if (data.status == 200 && data2.status == 200 && data3.status == 200){
        const cine = (await data.json()).data
        const tarifas = (await data2.json()).data
        const peliculas = (await data3.json()).data
        let html = `
        				<h2>${cine.RazonSocial}</h2>
				<div class="cine-info">
					<div class="cine-info datos">
						<p>${cine.Direccion}</p>
						<p>${cine.Telefonos}</p>
						<br/>
						<div class="tabla">
							<div class="fila">
								<div class="celda-titulo">Lunes y Miércoles</div>
								<div class="celda">S/. 5.00</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">Martes</div>
								<div class="celda">S/. 4.50</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">Jueves y Viernes</div>
								<div class="celda">S/. 7.00</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">Sábado, Domingo y Feriados</div>
								<div class="celda">S/. 8.00</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">Adulto mayor y niños hasta 8 años (sábados, domingos y feriados)</div>
								<div class="celda">S/. 6.00</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">3D - Lunes y Miércoles</div>
								<div class="celda">S/. 7.50</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">3D - Martes</div>
								<div class="celda">S/. 6.00</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">3D - Jueves a Domingo y Feriados</div>
								<div class="celda">S/. 11.00</div>
							</div>
						</div>
						<div class="aviso">
							<p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
						</div>
					</div>
					<img src="img/cine/${cine.id}.2.jpg"/>
					<br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
					<div class="cine-info peliculas">
						<div class="tabla">
							<div class="fila">
								<div class="celda-cabecera">Películas</div>
								<div class="celda-cabecera">Horarios</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">Locos de Amor 2 (+14)</div>
								<div class="celda">13:30 / 21:30</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">El Despertar de los Muertos Vivientes (+14) (HD - Doblada)</div>
								<div class="celda">17:30 / 22:00</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">Pantera Negra</div>
								<div class="celda">13:30 / 16:00 / 18:45 / 19:15 / 21:20</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">El cavernícola</div>
								<div class="celda">13:30 / 15:15</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<img style="float:left;" src="img/cine/${cine.id}.3.jpg" alt="Imagen del cine"/>
					<span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
						Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
						<br/><br/>
						Visitános y diviértete con nosotros. 
						<br/><br/>
						<b>CINESTAR</b>, siempre pensando en tí. 
					</span>		
				</div>
				
			</div>
		</div>
		<div class="clearbox"><br/></div>
        `
        document.getElementById('contenido-interno').innerHTML = html
    }
}
getCine()

