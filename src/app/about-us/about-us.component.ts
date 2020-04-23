import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('blog-background');
  }
  ngOnDestroy(): void {
    document.body.classList.remove('blog-background');
  }

}
