import HomeImage from '../../img/main.jpg'
import HomeImage2 from '../../img/loader2.gif'

import Style from './home.module.css'
import Carousel from 'react-bootstrap/Carousel';
export const HomePage = () => {
  return (
    <Carousel  fade>

      <Carousel.Item className={ Style.container}>
        <img
          className={ Style.homeImg }
          src={ HomeImage }
          alt="image"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={ Style.container}>
        <img
          className={ Style.homeImg }
          src={ HomeImage2 }
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={ Style.container}>
        <img
          className={ Style.homeImg }
          src={ HomeImage }
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
  );

  // return (
  //   <div>
  //     <img className={NavStyle.homeImg} src={ HomeImage } alt="image" />
  //   </div>

  // )
}




