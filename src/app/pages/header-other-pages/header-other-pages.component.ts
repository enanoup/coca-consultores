import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-other-pages',
  templateUrl: './header-other-pages.component.html',
  styleUrls: ['./header-other-pages.component.css']
})
export class HeaderOtherPagesComponent implements OnInit {

  activeFragment = this.route.fragment.pipe();

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
