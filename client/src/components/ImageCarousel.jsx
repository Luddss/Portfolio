import Carousel from 'react-bootstrap/Carousel';

function ImageCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={require(`../assets/images/Start.png`)} 
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={require(`../assets/images/Home.png`)} 
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={require(`../assets/images/Register.png`)} 
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={require(`../assets/images/Results.png`)}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;