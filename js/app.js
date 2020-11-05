baguetteBox.run('.gallery');


function myFunction() {
    // Declare variables
    
    const input = document.getElementById('search');
    const filter = input.value.toUpperCase();
    const image = document.getElementsByTagName("li");
    
  
    // Loop through all  items, and hide those who don't match the search query
    for (let i = 0; i < image.length; i++) {
     const caption = document.getElementsByTagName('a')[i].getAttribute('data-caption');
  
      if (caption.toUpperCase().indexOf(filter) > -1) {
        image[i].style.display = "";
      } else {
        image[i].style.display = "none";
      }
    }
  }
