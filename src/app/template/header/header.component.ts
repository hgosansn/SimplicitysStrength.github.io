import { Component, OnInit } from '@angular/core';
import { ThemingService } from '../theming.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private themeService: ThemingService) { }

  themeArray: string[][] = [
    ['#000000', '#000000', '#000000', '#000000', '#000000'],
    ['#111AAA', '#AA33AA', '#AAA44AA', '#55AAA', '#AAA33A']
  ];

  ngOnInit(): void {
    for (let index = 0; index < 20; index++) {
      this.themeArray.push(this.themeService.createRandomTheme());

    }

  }

  setTheme(themecolors: string[]) {
    // @ts-ignore
    this.themeService.setTheme(...themecolors);
  }

}
