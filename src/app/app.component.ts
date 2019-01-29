import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

  @ViewChild('appTitle') title: ElementRef;

  ngAfterViewInit(): void {
    this.title.nativeElement.innerHTML = 'Books Online Shop';
  }
}
