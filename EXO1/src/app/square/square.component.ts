import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  constructor() { }

  backgroundColor: string = '';

  ngOnInit(): void {
  }

  public changeBG(emitValue: string) {
    document.body.style.backgroundColor = emitValue
  }

}
