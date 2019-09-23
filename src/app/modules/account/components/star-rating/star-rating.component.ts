import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true
    }
  ]
})
export class StarRatingComponent implements OnInit, ControlValueAccessor {

  @Input() rating: number = 1;
  @Input() starCount: number = 5;
  @Input() editable: boolean = false;

  value: number;
  disabled: boolean;

  ratingArr: number[] = [];

  constructor() { }

  ngOnInit() {
    this.writeValue(this.rating);
    this.createStars();
  }

  onChange = (rating: number) => { };
  onTouched = () => { };

  writeValue(rating: number): void {
    this.value = rating;
    this.onChange(rating);
  }
  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  createStars() {
    this.ratingArr = [];
    for (let i = 0; i < this.starCount; i++) {
      this.ratingArr.push(i);
    }

  }

  onClick(rating: number) {
    if (!this.editable) {
      return;
    }

    this.writeValue(rating);
    this.createStars();
  }

  showIcon(index: number) {
    if (this.value >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}
