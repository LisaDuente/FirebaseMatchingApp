import { Carousel } from "react-bootstrap";


export function WelcomeCarousel(){
    const interval: number = 8000;
    return(
        <Carousel className="welcomeCarousel" controls={false}>
        <Carousel.Item interval={interval}>
          <img
            className=""
            src="placeholder.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{float: "right"}}>First slide label</h3>
            <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={interval}>
          <img
            className=""
            src="placeholder.png"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={interval}>
          <img
            className=""
            src="placeholder.png"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}