import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-dev-section',
  templateUrl: './web-dev-section.component.html',
  styleUrls: ['./web-dev-section.component.css'],
  imports: [CommonModule]
})
export class WebDevSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef<HTMLDivElement>;
  items = ['Html', 'css', 'express' ]; // Example items
  private scrollInterval: any;

  ngAfterViewInit() {
    this.startAutoScroll();
  }

  startAutoScroll() {
    const container = this.scrollContainer.nativeElement;
    this.scrollInterval = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0; // Reset to start
      } else {
        container.scrollLeft += 2; // Adjust speed as needed
      }
    }, 20); // Adjust interval as needed
  }

  ngOnDestroy() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }
}