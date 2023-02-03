const app = Vue.createApp({
    data() {
        return {


        }

    }
})

app.component('micard', {
    template: `<div class="card" style="width: 18rem;">
    <img src="https://www.daxtonsfriends.com/wp-content/uploads/close-up-pug.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
})

app.component(`carousel`,{
    template: `<div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://chiwawadog.com/wp-content/uploads/2019/03/chihuahua-dogschihuahua-dogs-backgrounds-with-pics-of-chiwawa-puppies-high-quality-for-pc--1024x768.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://i.pinimg.com/736x/11/75/fc/1175fcd0f7e144ed4ef66f7e8fb86332.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-4-1024x681.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>`
})

app.component('boton',{
    template:'<button type="button" class="btn-close" aria-label="Close"></button>'
})

app.component('alert',{
    template:'<div class="alert alert-primary" role="alert"> A simple primary alert—check it out!</div>'
})