import { Component, OnInit } from '@angular/core';

import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { SwiperOptions, FreeMode, Pagination, Swiper, Autoplay } from 'swiper';

Swiper.use([FreeMode, Pagination, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper(swiper: SwiperCore) {
    console.log('swiper', swiper);
  }

  onSlideChange() {
    console.log('slide changed');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
