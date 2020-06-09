import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.scss']
})
export class FullArticleComponent implements OnInit {


  @Input() page: string = '';

  constructor(private elementRef: ElementRef) { }

  paraphs: any[] = [0, 0, 0, 0];

  ngOnInit(): void {
    this.appendUtteranc();
  }

  /**
   * Hudge thanks to https://github.com/utterance/utterances
   */
  readonly repo = 'SimplicitysStrength/SimplicitysStrength.github.io';
  appendUtteranc() {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://utteranc.es/client.js';
    scriptTag.setAttribute('repo', this.repo);
    scriptTag.setAttribute('issue-term', 'url');
    scriptTag.setAttribute('theme', 'github-dark');
    scriptTag.setAttribute('crossorigin', 'anonymous');
    const htmlElement: HTMLElement = this.elementRef.nativeElement;
    const container = htmlElement.querySelector('#utteranc');
    if (!container) { return console.warn('Failed to insert Utterances - null query '); }
    container.appendChild(scriptTag);
  }
  /**
   * <script src="https://utteranc.es/client.js"
        repo="SimplicitysStrength/SimplicitysStrength.github.io"
        issue-term="url"
        theme="github-dark"
        crossorigin="anonymous"
        async>
    </script>
   */

}
