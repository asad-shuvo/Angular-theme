import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {
  @Input('theme') theme: any;
  constructor() { }

  ngOnInit(): void {
  }

}
