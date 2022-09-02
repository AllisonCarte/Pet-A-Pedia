import Carousel from 'react-bootstrap/Carousel';
import { HomeEdition } from "../home/homePets";
export const HomeCarousel = () => {
  return (
    <>
      <section > 
        {/* <HomeEdition/> */}
        <div style={{ }}>
          <Carousel style={{ border: "solid black", height: "44.8vw" }} className="d-block">
         
            <Carousel.Item >
              <img
                style={{ height: "44.5vw", width: "99.9vw" }}
                className="d-block "
                src="https://images.pexels.com/photos/6897437/pexels-photo-6897437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Explore</h3>
                <p>Browse pet profiles</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "44.5vw", width: "99.9vw" }}
                className="d-block"
                src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Show off</h3>
                <p>Submit profiles for others to explore</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "44.5vw", width: "99.9vw" }}
                className="d-block "
                src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Let us help</h3>
                <p>
                  Use our built-in schedule to keep track of important dates
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  )
}