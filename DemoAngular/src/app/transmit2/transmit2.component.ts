import { Component, OnInit, ViewChild } from '@angular/core';
import {Transmit1Component} from '../transmit1/transmit1.component';

@Component({
  selector: 'app-transmit2',
  templateUrl: './transmit2.component.html',
  styleUrls: ['./transmit2.component.css']
})
export class Transmit2Component implements OnInit {
  public agree: number = 0;
  public disgree: number = 0;

  public names = ["A", "B", "C", "D"];

  @ViewChild(Transmit1Component)
  private Transmit1Component: Transmit1Component;

  parentVote(agree: boolean) {
    if (agree) this.agree++;
    else this.disgree++;
  }
  changeName(){
    this.Transmit1Component.setName('change name in parent');
  }
  constructor() { }

  ngOnInit() {
  }

}
