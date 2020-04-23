import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit, OnDestroy {

  collection = [];
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
  panelOpenState = false;
  p: number;
  ngOnInit(): void {
    document.body.classList.add('blog-background');
  }
  ngOnDestroy(): void {
    document.body.classList.remove('blog-background');
  }

}
