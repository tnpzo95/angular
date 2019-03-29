import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  public cone = true;
  public ctwo = true;
  
  toggle(){
    this.cone=!this.cone;
    this.ctwo=!this.ctwo;
  }

  constructor() { }

  ngOnInit() {
  }

}
