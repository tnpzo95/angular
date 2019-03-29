import { Component, OnInit } from '@angular/core';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  onSubmit(value:any){
    console.log(value);
  }
  public cities = [{Id:1, Name:"Ha Noi"},{Id:2, Name:"Thai Nguyen"}];

  constructor() { }

  ngOnInit() {
  }

}
