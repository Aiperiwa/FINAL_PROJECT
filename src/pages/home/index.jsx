import HomeImage from '../../img/doroga-zvezdy-gory-noch-nochnaia-doroga-long-exposure-dlinna.jpg'
import HomeImage2 from '../../img/Без названия.jpg'
import HomeImage3 from '../../img/main.jpg'


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
          <h3 className={ Style.carouselText}>Уверенность за рулем на всю жизнь.</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>. */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={ Style.container}>
        <img
          className={ Style.homeImg }
          src={ HomeImage2 }
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Самый короткий путь к безопасному вождению.</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={ Style.container}>
        <img
          className={ Style.homeImg }
          src={ HomeImage3 }
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Придай ускорение мечте!</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );

  // return (
  //   <div>
  //     <img className={Style.homeImg} src={ HomeImage } alt="image" />
  //   </div>

  // )
}




