// typing.component.ts
import { Component, ElementRef, AfterViewInit, ContentChild, TemplateRef, ViewContainerRef , ViewChild } from '@angular/core';
import TypeIt from 'typeit';

@Component({
  selector: 'app-typing',
  standalone: true,
  template: `
    <span #typeTarget></span>
    <span #hiddenContent style="display:none"><ng-content></ng-content></span>
  `,
  styles: []
})
export class TypingComponentComponent implements AfterViewInit {
  @ViewChild('typeTarget', { static: true }) typeTarget!: ElementRef<HTMLSpanElement>;
  @ViewChild('hiddenContent', { static: true }) hiddenContent!: ElementRef<HTMLSpanElement>;

  ngAfterViewInit(): void {
    const content = this.hiddenContent.nativeElement.textContent?.trim() ?? '';
    this.typeTarget.nativeElement.innerHTML = '';

    if (content) {
      new TypeIt(this.typeTarget.nativeElement, {
        speed: 50,
        waitUntilVisible: true,
      })
        .type(content)
        .go();
    }
  }
}