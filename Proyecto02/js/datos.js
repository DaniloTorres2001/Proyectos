
window.addEventListener('DOMContentLoaded',(event) => {
	cargarDatos();
});

/*let cargarDatos = () => {      

      let url = 'https://api.tvmaze.com/shows/73?embed[]=episodes&embed[]=cast'
      fetch(url)
        .then(response => response.text())
        .then( data => {
          const parser = new DOMParser();
          const xml = parser.parseFromString(data, "application/xml");
          // Procesamiento de la constante xml

          let select = document.getElementsByClassName('custom-select')[0]
          let escritores = xml.getElementsByTagName('episodes')


          let episodios = data["episodes"]

          console.log(escritores[0])

          


          document.getElementById("Name").innerHTML = '<td id="Name">hola</td>'
          

                              

        })    
} */
let cargarDatos = () => {      

      let url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
      fetch(url)
        .then(response => response.json())
        .then( data => {          
          

          //let select = document.getElementsByClassName('custom-select')[0]          

          var contador = data.filter(arr => arr.nome).length
          console.log("Peticion realizada con exito")

          for (i=0; i<contador; i++){ 

            
          let plantilla = `
            <tr>                                        
                <td>${data[i].codigo}</td>
                <td>${data[i].nome}</td>
            </tr>

          `
          document.getElementById("marcasAutos").innerHTML += plantilla
            
          }    
          
        })    
}
                              

