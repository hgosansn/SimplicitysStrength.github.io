import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemingService } from '../theming.service';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(private themeService: ThemingService) { }
  readonly theme1 = ['#111AAA', '#AA33AA', '#AAA44AA', '#55AAA', '#AAA33A'];

  ngOnInit(): void {

    // @ts-ignore
    //this.themeService.setTheme(...this.theme1);
    this.themeService.setRandomTheme();
  }

}
