import 'index.css';

// Add Carousel
import '@fancyapps/ui/dist/carousel.css';
import { Carousel } from '@fancyapps/ui';

// Add `Autoplay` plugin
import { Autoplay } from '@fancyapps/ui/dist/carousel.autoplay.esm.js';
Carousel.Plugins.Autoplay = Autoplay;

// Create slides
const mySlides = [];

for (let i = 0; i < 5; i++) {
  mySlides.push({
    html: `#${i}`
  });
}

// Initialize Carousel
const myCarousel = new Carousel(document.querySelector('#myCarousel'), {
  slides: mySlides,
  Autoplay: {
    timeout: 1000
  }
});
  