import { Component, OnInit, Input } from '@angular/core';
import { IFeedback } from 'src/app/models/feedback';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss']
})
export class FeedbackCardComponent implements OnInit {

  @Input() feedback: IFeedback;
  constructor() { }

  ngOnInit() {
  }



}
