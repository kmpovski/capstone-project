
import './Testimonials.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="content grid ">
        <h2>What people say about us!</h2>
        <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={1}
        isPlaying
        totalSlides="2"
        >
          <Slider>
            <Slide index="0">
              <p>"The best Restaurant in Town ! Cosy atmosphere, a wonderful moment !"</p>
              <em>Lauren Jackson</em>
            </Slide>
            <Slide index="1">
              <p>"We had a lovely time in family, definitely recommand !"</p>
              <em>Stephany Pearce</em>
            </Slide>
          </Slider>
          <ButtonBack>&lt;</ButtonBack>
          <ButtonNext>&gt;</ButtonNext>
        </CarouselProvider>
     </div>
    </section>
  );
};

export default Testimonials;
