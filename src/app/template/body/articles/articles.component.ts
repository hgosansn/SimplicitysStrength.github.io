import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, AfterViewInit {

  articles: any[] = [1,2,3,4,5,6];

  constructor() { }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {  }

}
