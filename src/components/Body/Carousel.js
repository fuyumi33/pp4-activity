function Carousel(){
return (
  <>
<div id="carouselExample" className="carousel slide mb-4">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1393972058/vector/wide-abstract-luxury-background-design-web-template-business-report-smooth-gradient-light.jpg?s=612x612&w=0&k=20&c=3aNqgkyE0YfEDxWuHeTZBNsdwugIjTloijpyaEmae3U=" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/908020928/photo/colorful-gradient-blur-background.jpg?s=612x612&w=0&k=20&c=xDaRaEHQhIzq3IiB1GnjkGN2TQTGgke4PBmCiI__SuE=" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </>



)


}

export default Carousel;