import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  readonly classPrefix: string = 'carousel_';
  current: any = 0;

  constructor() { }

  carouselElements: any[] = ['🚀', '🚅', '🚇', '🚉', '🚌', '🚑', '🚒', '🚓', '🚕', '🚗', '🚙', '🚚', '🚢', '🚲', '🚤', '🚥', '🚧', '🚨'];

  ngOnInit(): void {
  }

  scroll(forward: boolean) {
    const factor = 5;
    this.current += forward ? factor : -1 * factor;
    this.current = Math.min(Math.max(this.current, 0), this.carouselElements.length - 1);
    this.scrollTo(this.current);
  }

  scrollTo(index: number, behavior: 'smooth' | 'auto' | undefined = 'smooth') {
    const element = document.getElementById(this.classPrefix + index);
    console.log({index, element});
    if (element == null) { return; }
    element.scrollIntoView({
      behavior
    });
  }

}
