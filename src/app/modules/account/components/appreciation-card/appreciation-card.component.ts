import { Component, OnInit, Input } from '@angular/core';
import { IAppreciation } from 'src/app/models/appreciation';

@Component({
  selector: 'app-appreciation-card',
  templateUrl: './appreciation-card.component.html',
  styleUrls: ['./appreciation-card.component.scss']
})
export class AppreciationCardComponent implements OnInit {
  @Input() appreciation: IAppreciation;
  constructor() { }

  ngOnInit() {
  }

}
