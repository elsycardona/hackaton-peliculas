const objPelis=[];
//let i=0;
const arrayPelis =['Get out','Psycho','The babadook','The cabinet of Dr. Caligari','The silence of the Lambs','Girls Trip','Zoolander','I Heart Huckabees','Tenacious D in The Pick of Destiny','Bridesmaids','Indiana Jones','Star Wars','Jumanji','Pirates of the Caribbean: The Curse of the Black Pearl','Mad Max: Fury Road','Metropolis','Gravity','War for the Planet of the Apes','Wall-E','Terminator 2: Judgment Day','The Dark Knight','Drive', 'E.T. The Extra-Terrestrial', 'Seven Samurai', 'American Pie', 'The Hangover', 'The Mask', 'Scary Movie', 'Deadpool', 'Back to the Future', 'Jurassic Park', 'The Lord of the Rings', 'Harry Potter', 'Avengers', 'Terminator', 'Pulp Fiction', 'Die Hard', 'Twelve Monkeys', 'Man on Fire', 'Kill Bill', 'The Dark Knight', 'Metropolis', 'Inception', 'A Clockwork Orange', '2001: A Space Odyssey', 'The Exorcist', ' The Shining', 'The Omen', 'Hostel', 'It'];
url = 'https://www.omdbapi.com/?t=';

for (let i=0; i< arrayPelis.length; i++)
{   
   let url_pelis = url+arrayPelis[i]+'&apikey=4c2bc917'
   fetch(url_pelis ) //lectura del archivo .json
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('data', JSON.stringify(data))
   // console.log (data); 
    objPelis.push(data);
    console.log(objPelis);
    return data;
    
  }) 
  //console.log (data); 

  .catch(err => (err))
}



const dropdownGenero = document.getElementsByClassName('dropdown-item'); //funcion filtro
const selectGenero = () => {
    
  for (let i = 0; i < dropdownGenero.length; i++) {
    dropdownGenero[i].addEventListener("click", () => {
      //console.log("hola")
      let generoId = dropdownGenero[i].id;
      const arrayGeneroPeli = window.data.filtroGenero(objPelis, generoId);
      //console.log(arrayGenero)
      PrintMovies(arrayGeneroPeli);
      return arrayGeneroPeli;
      
      //getMovies (arrayGeneroPeli)
})
  }}
  selectGenero()

  const dropdownLanguage = document.getElementsByClassName('dropdown-item Language');

  const selectPais = () => {
    for (let i = 0; i < dropdownLanguage.length; i++) {
      dropdownLanguage[i].addEventListener("click", () => {
        //console.log("hola")
        let paisId = dropdownLanguage[i].id;
        const arrayPaisPeli = window.data.filtroPais(objPelis, paisId);
        //console.log(arrayGenero)
        PrintMovies(arrayPaisPeli);
        return arrayPaisPeli;
        
        //getMovies (arrayGeneroPeli)
  })
    }}
    selectPais()


  const productWrappGener = document.getElementById('list-genero');
    const PrintMovies = (objTitlePelis) => { //muestra peliculas por genero 
      let viewMovie = '';
      for (let i in objTitlePelis) {
         viewMovie = viewMovie + `  
          
            <div class="card col-lg-3 col-md-6 col-sm-12">
             <div class="card-body bg-dark" style="width = 20rem;">
               <img src="${objTitlePelis[i].Poster}" class="card-img-top" alt="${objTitlePelis[i].Title}">
               <div class="card-body">
               <h5 id="product-name" class="card-title d-flex justify-content-center">${objTitlePelis[i].Title}</h5>
               </div>
             </div> 
            </div>               
            `
            }
                
      productWrappGener.innerHTML = viewMovie;
      return viewMovie;
    }
