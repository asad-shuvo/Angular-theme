import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  theme = 'light-theme';
  overlay: HTMLElement;


  constructor(private overlayContainer: OverlayContainer) {
    this.overlay = overlayContainer.getContainerElement();
  }

  ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  changeTheme(event): void {
    if (this.overlay.classList.contains('dark-theme')) {
      this.overlay.classList.remove('dark-theme');
      this.overlay.classList.add('light-theme');
    } else if (this.overlay.classList.contains('light-theme')) {
      this.overlay.classList.remove('light-theme');
      this.overlay.classList.add('dark-theme');
    } else {
      this.overlay.classList.add('light-theme');
    }
  }
}
