import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transmit1',
  templateUrl: './transmit1.component.html',
  styleUrls: ['./transmit1.component.css']
})
export class Transmit1Component implements OnInit {
  
  @Input() name:string;
  @Output() onVote = new EventEmitter<boolean>();

  public voted:boolean = false;


  setName(name:string){
    this.name = name;
  }

  public vote(agree:boolean){
    this.voted = true;
    this.onVote.emit(agree);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
