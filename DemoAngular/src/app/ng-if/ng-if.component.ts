import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  public title = "This is Two way binding";
  public show =true;
  public color = "aaaa";
  
  public colors = ["red","green","blue"];

  constructor() { }

  ngOnInit() {
  }

}
