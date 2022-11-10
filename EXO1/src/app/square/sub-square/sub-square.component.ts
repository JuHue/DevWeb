import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-square',
  templateUrl: './sub-square.component.html',
  styleUrls: ['./sub-square.component.scss']
})
export class SubSquareComponent implements OnInit {
  @Input() color: string = '';

  @Output() bgColor: EventEmitter<string> = new EventEmitter();



  ngOnInit(): void {

  }

  public setBackGroundColor(value: any) {
    this.bgColor.emit(value);
  }

}
