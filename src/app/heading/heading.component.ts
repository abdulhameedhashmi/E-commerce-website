import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  
  constructor(private _services:ApiService,private router:Router) { }
  
  

  ngOnInit(): void {
  
  }
  onClickFunction(){
    this.router.navigate(['login']);
  }
   
}