const baseUrl =`http://localhost:3000/films`

fetch(baseUrl)
.then((res) => res.json())
.then((data) => {
  renderMovieDetails(data[0]);
  movieItems(data);
})
.catch((err) =>console.log('error',err))

function renderMovieDetails(data){
  let Showing = document.getElementById('Showing');
  console.log(Showing);

  let title = document.createElement('h2')
  title.textContent = data.title

  let description = document.createElement('p')
  description.textContent = data.description

  let remainingTickets = data.capacity - data.tickets_sold;

  let tickets = document.createElement('button');

  tickets.addEventListener('click',function(){
    remainingTickets--
    if(remainingTickets<0){
      tickets.disabled = true;
      return tickets.textContent="tickets sold out"
    }
  })
  tickets.textContent = remainingTickets

  Showing.appendChild(title);
  Showing.appendChild(description);
  Showing.appendChild(tickets);


}

function movieItems(movies){
  let movieList = document.getElementById('films');
  
  movies.forEach((mov) => {

    let lis = document.createElement('li')
    let title = document.createElement('h2')
    title.textContent = mov.title


    title.addEventListener('click', function(){
        renderMovieDetails(mov)
    })
     lis.appendChild(title)


     movieList.appendChild(title)
  
  });
}
