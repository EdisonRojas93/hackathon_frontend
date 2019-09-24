import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { FeedbackService } from '../../services/feedback/feedback.service';
import { IFeedback } from 'src/app/models/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  users: any[] = [];
  filteredOptions: any = [];
  scores: any = [];
  feedbackForm: FormGroup;
  feedbacks: any;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private feedbackService: FeedbackService
  ) { }

  ngOnInit() {

    this.feedbackForm = this.fb.group({
      user: ['', Validators.required],
      comment: ['', Validators.required],
      anonimus: [false],
      scores: this.fb.array([])

    });

    this.userService.getUsers().subscribe(res => this.users = res);
    this.feedbacks = this.feedbackService.getFeedbacks();

    this.filteredOptions = this.feedbackForm.get('user').valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.users.slice())
      );
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    console.log(this.users);

    return this.users.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  displayFn(user?: any): string | undefined {
    return user ? user.name : undefined;
  }

  selectValue(user: any) {
    console.log('value selected', user);
    this.scores = user.area.scores;
  }

  get feedbackArr() {
    return this.feedbackForm.get('scores') as FormArray;
  }

  addFeedback() {
    const scores = this.feedbackForm.controls.scores as FormArray;
    scores.push(this.fb.group({
      score_id: '',
      score: '',
    }));
  }

  deleteFeedback(index) {
    const scores = this.feedbackForm.get('scores') as FormArray;
    scores.removeAt(index);
  }

  sendFeedback() {

    if (this.feedbackForm.invalid) {
      return;
    }

    const feedback: IFeedback = {
      comments: this.feedbackForm.value.comment,
      score: this.feedbackForm.value.scores,
      sender: this.feedbackForm.value.anonimus,
      user_id: this.feedbackForm.value.user.id
    }

    this.feedbackService.sendFeedback(feedback);

  }

}
