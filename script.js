
// https://api.lyrics.ovh/v1/${artist}/${songTitle}

const apiLastFm = '44c9e309933cac8246b742f7205938e1'
// 'ead499f01932a4ef8bde5ceb5d5aa6da'

function getInput(){
    $('form').submit(event => {
      event.preventDefault();
      let user = $('.userInput').val();
      getApi(user)
    })
  }

   function getTopArtist(){
       const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiLastFm}&format=json`

       fetch(url)
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => {
         alert('something went wrong try again');
         console.log(error);
       })
   }

  
  
  function getApi(artist){
    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${apiLastFm}&format=json`;

  
    fetch(url)
    .then(response => response.json())
    .then(data => showResults(data))
    .catch(error => {
      alert('something went wrong try again');
      console.log(error);
    })
  };
  

  function topArtist(){
  
  }

  
  // show the results
  function showResults(data){
    console.log(data)
    // $('.searchList').empty();
    let total = data.topalbums.album.length;
  for (let i = 0; i < 5 ;i++){
    console.log(data.topalbums.album[i].image[3]['#text'])
   
    }
  }

  

   
  
  $(getInput)
  $(getTopArtist)