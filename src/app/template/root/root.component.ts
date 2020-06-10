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
  readonly theme1 = ['#3a3a3a', '#00b4b1', '#eee', '#303030', '#bababa'];

  ngOnInit(): void {

    // @ts-ignore
    this.themeService.setTheme(...this.theme1);
  }

}
