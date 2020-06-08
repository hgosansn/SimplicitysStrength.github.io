import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss']
})
export class SpotlightComponent implements OnInit, AfterViewInit {

  /**
   * https://unsplash.com/license
   * All photos published on Unsplash can be used for free.
   * You can use them for commercial and noncommercial purposes.
   * You do not need to ask permission from or provide credit to the photographer or Unsplash,
   * although it is appreciated when possible.
   */
  readonly unsplashUrl = 'https://source.unsplash.com/';
  pictureIds: string[] = [
    'BYu8ITUWMfc',
    'uq5RMAZdZG4',
    'VviFtDJakYk',
    'cAtYtIc0SI4',
    'Q1p7bh3SHj8',
    'Yj1M5riCKk4',
  ];

  constructor() { }


  ngAfterViewInit(): void {
    this.changePicture(this.pictureIds[0]);
  }

  ngOnInit(): void {

  }



  changePicture(id: string) {
    // @ts-ignore
    document.getElementById('spotlight').style.backgroundImage = 'url(' + this.unsplashUrl + id + ')';
  }
}
