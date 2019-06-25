import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from '../../dist/images/slide1.jpg';
import Image2 from '../../dist/images/slide2.jpg';
import Image3 from '../../dist/images/slide3.jpg';
import Image4 from '../../dist/images/slide4.jpg';
import Image5 from '../../dist/images/slide5.jpg';
import Image6 from '../../dist/images/slide6.jpg';
import Image7 from '../../dist/images/slide7.jpg';
import Image8 from '../../dist/images/slide8.jpg';
import Image9 from '../../dist/images/slide9.jpg';


const items = [
  {
    src: Image1
  },
  {
    src: Image2
  },
  {
    src: Image3
  },
  {
    src: Image4
  },
  {
    src: Image5
  },
  {
    src: Image6
  },
  {
    src: Image7
  },
  {
    src: Image8
  },
  {
    src: Image9
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          className='item'
        >
          <img src={item.src} class="carousel" />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div className='parentComponent'>
      <div className='Title' >
        <p>
        <a>Ink Me</a>
        <h6>Find your nearest local tattoo shop that fits your style</h6>  
        </p>    
      </div> 
      <div className='mainCarousel'>
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        className='carousel-img-width'

      >
      
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      </div>
      </div>
        
    );
  }
}


export default Example;
