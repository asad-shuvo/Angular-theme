import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {
  @Input('theme') theme: any;
  constructor() { }

  ngOnInit(): void {
  }

}
