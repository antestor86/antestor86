import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  source = "../assets/logo.png";

  constructor(private data: DataService) { }

  ngOnInit(): void {

  }



}
