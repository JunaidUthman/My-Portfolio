// animate-on-load.component.ts
import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { animate, timeline } from '@motionone/dom';

@Component({
  selector: 'app-animate-on-load',
  standalone: true,
  template: `
    <div #container>
      <ng-content></ng-content>
    </div>
  `,
})
export class AnimateOnLoadComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Select all direct children of the container div
    const container = this.el.nativeElement.querySelector('div');
    const children = Array.from(container.children) as Element[];

    // Animate each projected child
    children.forEach((child: Element, idx: number) => {
      child.animate(
        [
          { opacity: 0, transform: 'translateY(30px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        {
          duration: 800,
          easing: 'ease-out',
          delay: idx * 100 // stagger animations if multiple children
        }
      );
    });
  }
}