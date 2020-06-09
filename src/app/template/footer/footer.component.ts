import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
declare let twttr: any;

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    twttr.widgets.load(this.element.nativeElement);
  }
}
