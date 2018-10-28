import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Jane Doe';
  message = 'I\'m an emerging artist!';

  constructor() { }

  ngOnInit() {
  }

}
