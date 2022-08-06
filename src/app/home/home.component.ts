import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const leftPosition = document.getElementById('social-group')?.offsetLeft;
    document.getElementById('email-id')?.setAttribute('style', `right:${leftPosition}px;`);
  }

  LoadResumeViewer() {
    this._router.navigate([]).then(result => { window.open('/resume-viewer', '_blank') });
  }

}
