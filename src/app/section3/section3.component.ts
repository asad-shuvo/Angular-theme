import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {
  @Input('theme') theme: any;
  constructor() { }

  ngOnInit(): void {
  }

}
