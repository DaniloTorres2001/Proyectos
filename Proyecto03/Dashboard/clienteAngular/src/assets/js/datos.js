
window.addEventListener('DOMContentLoaded',(event) => {
    //CPIUS
    let cargarDatos1 = () => {      
  
      let url = 'https://www.econdb.com/api/series/CPIUS/?format=json'
      fetch(url)
        .then(response => response.json())
        .then( datos => {   
  
          var speedCanvas = document.getElementById("speedChart-line1"); 
          var contador = datos.data.values.length;      
  
          const data=[];
          for (i=0; i<contador; i++){
            data.push(datos.data.values[i])
          }
          
          var dataFirst = {          
            label: "Consumer Price Index ($)", 
            data,                           
            lineTension: 0,
            fill: false,
            borderColor: 'red'
          };
  
          const labels = []
          for (i=0; i<contador; i++){
            labels.push(datos.data.dates[i])
          }
  
          var speedData = {
            labels,
            datasets: [dataFirst]
          };
  
          var chartOptions = {
            legend: {
              display: true,
              position: 'top',
              labels: {
                boxWidth: 50,
                fontColor: 'black'
              }
            }
          };
  
          var lineChart = new Chart(speedCanvas, {
            type: 'line',
            data: speedData,
            options: chartOptions
          });
        })    
    }
  
    //CIPIES                          
    let cargarDatos2 = () => {      
  
      let url = 'https://www.econdb.com/api/series/CPIES/?format=json'
      fetch(url)
        .then(response => response.json())
        .then( datos => {         
  
          var speedCanvas = document.getElementById("speedChart-line2"); 
          var contador = datos.data.values.length;      
  
          const data=[];
          for (i=0; i<contador; i++){
            data.push(datos.data.values[i])
          }
          
          var dataFirst = {          
            label: "Consumer Price Index ($)", 
            data,                           
            lineTension: 0,
            fill: false,
            borderColor: 'blue'
          };
  
          const labels = []
          for (i=0; i<contador; i++){
            labels.push(datos.data.dates[i])
          }
  
          var speedData = {
            labels,
            datasets: [dataFirst]
          };
  
          var chartOptions = {
            legend: {
              display: true,
              position: 'top',
              labels: {
                boxWidth: 50,
                fontColor: 'black'
              }
            }
          };
  
          var lineChart = new Chart(speedCanvas, {
            type: 'line',
            data: speedData,
            options: chartOptions
          });
        })    
    }
  
    //UNEMPLOYMENT 2019
    let cargarDatos3 = () => {      
  
      let url = 'https://www.econdb.com/api/series/URATEUS/?format=json'
      fetch(url)
        .then(response => response.json())
        .then( datos => {               
          
          var contador = datos.data.values.length;
          console.log(contador);
  
          const labels = []
          for (i=852; i<864; i++){
            labels.push(datos.data.dates[i])
          }
  
          const data = []
          for (i=852; i<864; i++){
            data.push(datos.data.values[i])
          }
  
          const graph = document.getElementById("grafica1"); 
  
  
  
          const daaa = {
            labels: labels,
            datasets: [{
              label:"Unemployment Rate (2019)",
              data,
              backgroundColor: 'rgba(9, 129, 176, 0.2)'
            }]
          };
  
          const config = {
            type: 'bar',
            data: daaa,
            };
          new Chart(graph, config);      
        })    
    }
  
    //IPES 
    let cargarDatos4 = () => {      
  
      let url = 'https://www.econdb.com/api/series/IPES/?format=json'
      fetch(url)
        .then(response => response.json())
        .then( datos => {         
  
          var speedCanvas = document.getElementById("speedChart-line3"); 
          var contador = datos.data.values.length;      
  
          const data=[];
          for (i=0; i<contador; i++){
            data.push(datos.data.values[i])
          }
          
          var dataFirst = {          
            label: "Industrial Production", 
            data,                           
            lineTension: 0,
            fill: false,
            borderColor: 'green'
          };
  
          const labels = []
          for (i=0; i<contador; i++){
            labels.push(datos.data.dates[i])
          }
  
          var speedData = {
            labels,
            datasets: [dataFirst]
          };
  
          var chartOptions = {
            legend: {
              display: true,
              position: 'top',
              labels: {
                boxWidth: 50,
                fontColor: 'black'
              }
            }
          };
  
          var lineChart = new Chart(speedCanvas, {
            type: 'line',
            data: speedData,
            options: chartOptions
          });
        })    
    }
  
    //UNEMPLOYMENT 2020
    let cargarDatos5 = () => {      
  
      let url = 'https://www.econdb.com/api/series/URATEUS/?format=json'
      fetch(url)
        .then(response => response.json())
        .then( datos => {               
          
          var contador = datos.data.values.length;
          console.log(contador);
  
          const labels = []
          for (i=864; i<876; i++){
            labels.push(datos.data.dates[i])
          }
  
          const data = []
          for (i=864; i<876; i++){
            data.push(datos.data.values[i])
          }
  
          const graph = document.getElementById("grafica2"); 
  
  
  
          const daaa = {
            labels: labels,
            datasets: [{
              label:"Unemployment Rate (2020)",
              data,
              backgroundColor: 'rgba(28, 29, 17, 0.2)'
            }]
          };
  
          const config = {
            type: 'bar',
            data: daaa,
            };
          new Chart(graph, config);      
        })    
    }
  
    //UNEMPLOYMENT 2021
    let cargarDatos6 = () => {      
  
      let url = 'https://www.econdb.com/api/series/URATEUS/?format=json'
      fetch(url)
        .then(response => response.json())
        .then( datos => {               
          
          var contador = datos.data.values.length;
          console.log(contador);
  
          const labels = []
          for (i=876; i<888; i++){
            labels.push(datos.data.dates[i])
          }
  
          const data = []
          for (i=876; i<888; i++){
            data.push(datos.data.values[i])
          }
  
          const graph = document.getElementById("grafica3"); 
  
  
  
          const daaa = {
            labels: labels,
            datasets: [{
              label:"Unemployment Rate (2021)",
              data,
              backgroundColor: 'rgba(191, 63, 191, 0.2)'
            }]
          };
  
          const config = {
            type: 'bar',
            data: daaa,
            };
          new Chart(graph, config);      
        })    
    }
    //CPIES cargar años
    let cargarDatos7 = () => {      
  
      let url = 'https://www.econdb.com/api/series/CPIES/?format=json'
      fetch(url)
        .then(response => response.json())
        .then( datos => {               
          
          var contador = datos.data.dates.length                
          for (i=1954; i<2022; i++){
            let plantilla1 = `
              <option id= "opciones1234">${i}</option>                  
            `
            document.getElementById("lista-select").innerHTML += plantilla1      
            
          }
          
        })    
    }
    //CPIES filtro
    let cargarDatos8 = () =>{
      let url = 'https://www.econdb.com/api/series/CPIES/?format=json'
      fetch(url)
        .then(response => response.json())
        .then( datos => {               
           
          document.getElementById("lista-select").addEventListener("click", function() {
  
            var valor = this.value;
            const labels = []
            const data = []
            for (i=0; i<datos.data.dates.length; i++){
              if (datos.data.dates[i].substring(0,4) == valor) {
                labels.push(datos.data.dates[i])
                data.push(datos.data.values[i])
              }        
            }
            console.log(labels)
            console.log(data)
  
            let plantilla2 = `
              <canvas id="speedChart-line2" width="900" height="700"></canvas>           
            `
  
            document.getElementById("opciones-listas").innerHTML = plantilla2; 
                     
  
            var speedCanvas = document.getElementById("speedChart-line2"); 
            
            
            var dataFirst = {          
              label: "Consumer Price Index ($)", 
              data,                           
              lineTension: 0,
              fill: false,
              borderColor: 'blue'
            };
            
  
            var speedData = {
              labels,
              datasets: [dataFirst]
            };
  
            var chartOptions = {
              legend: {
                display: true,
                position: 'top',
                labels: {
                  boxWidth: 50,
                  fontColor: 'black'
                }
              }
            };          
            var lineChart = new Chart(speedCanvas, {
              type: 'line',
              data: speedData,
              options: chartOptions
            });
            
  
          });            
          
        })                 
    }
  
    //CPIES cargar años
    let cargarDatos9 = () => {      
  
      let url = 'https://www.econdb.com/api/series/CPIUS/?format=json'
      fetch(url)
        .then(response => response.json())
        .then( datos => {               
          
          var contador = datos.data.dates.length                
          for (i=1954; i<2022; i++){
            let plantilla1 = `
              <option id= "opciones1234">${i}</option>                  
            `
            document.getElementById("lista-select2").innerHTML += plantilla1      
            
          }
          
        })    
    }
    //CPIES filtro
    let cargarDatos10 = () =>{
      let url = 'https://www.econdb.com/api/series/CPIUS/?format=json'
      fetch(url)
        .then(response => response.json())
        .then( datos => {               
           
          document.getElementById("lista-select2").addEventListener("click", function() {
  
            var valor = this.value;
            const labels = []
            const data = []
            for (i=0; i<datos.data.dates.length; i++){
              if (datos.data.dates[i].substring(0,4) == valor) {
                labels.push(datos.data.dates[i])
                data.push(datos.data.values[i])
              }        
            }
            console.log(labels)
            console.log(data)
  
            let plantilla2 = `
              <canvas id="speedChart-line1" width="900" height="700"></canvas>           
            `
  
            document.getElementById("opciones-listas2").innerHTML = plantilla2; 
                     
  
            var speedCanvas = document.getElementById("speedChart-line1"); 
            
            
            var dataFirst = {          
              label: "Consumer Price Index ($)", 
              data,                           
              lineTension: 0,
              fill: false,
              borderColor: 'red'
            };
            
  
            var speedData = {
              labels,
              datasets: [dataFirst]
            };
  
            var chartOptions = {
              legend: {
                display: true,
                position: 'top',
                labels: {
                  boxWidth: 50,
                  fontColor: 'black'
                }
              }
            };          
            var lineChart = new Chart(speedCanvas, {
              type: 'line',
              data: speedData,
              options: chartOptions
            });
            
  
          });            
          
        })                 
    }
  
  
    cargarDatos1(); 
    cargarDatos2();
    cargarDatos3();
    cargarDatos4();
    cargarDatos5();
    cargarDatos6();
    cargarDatos7();
    cargarDatos8();
    cargarDatos9();
    cargarDatos10();
  
  });
  
  /*
  var contador = data.data.values.length                
  
  let plantilla1 = `
    <tr>
      <td style="--start: 0.0; --size: calc(${data.data.values[0]}/100)"> <span class="data"> ${data.data.dates[0]}</ </span> </td>
    </tr>            
  `
  document.getElementById("datosapi").innerHTML = plantilla1
  
  for (i=1; i<10; i++){ 
  
    
  let plantilla2 = `
    <tr>
      <td style="--start: calc(${data.data.values[i-1]}/100); --size: calc(${data.data.values[i]}/100)"> <span class="data"> ${data.data.dates[i]}</ </span> </td>
    </tr>            
  `
  document.getElementById("datosapi").innerHTML += plantilla2
  
  } 
  */
  
  
  
  
  