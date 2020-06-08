import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.scss']
})
export class FullArticleComponent implements OnInit {

  constructor() { }

  paraphs: any[] = [0, 0, 0, 0];

  ngOnInit(): void {
  }

}
