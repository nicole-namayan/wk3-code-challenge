fetch('http://localhost:3000/films')
.then(response => response.json())
.then(data => {
  const filmsDiv = document.getElementById('films');
  const filmsList = document.createElement('ul');
  
  data.forEach(film => {
    const filmItem = document.createElement('li');
    filmItem.textContent = film.title;
    filmsList.appendChild(filmItem);
  });

  filmsDiv.appendChild(filmsList);

})


  
  
  
  


 
  