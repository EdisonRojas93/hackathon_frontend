import { Component, OnInit, Input, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { IAppreciation } from 'src/app/models/appreciation';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import * as $ from 'jquery';
import 'bootstrap';
import { MatChipInputEvent } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Observable } from 'rxjs';
import { AppreciationService } from '../../services/appreciation/appreciation.service';
import { startWith, map } from 'rxjs/operators';

export interface Skills {
  name: string;
}

@Component({
  selector: 'app-appreciation',
  templateUrl: './appreciation.component.html',
  styleUrls: ['./appreciation.component.scss']
})
export class AppreciationComponent implements OnInit, OnDestroy {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  skils: Skills[] = [
    { name: 'buen trabajo' },

  ];

  routeImg: string[] = [];
  appreciationForm: FormGroup;
  imgSelect: string = 'appreciation1.jpg'
  showErros: boolean = false;
  users: any[] = [];
  filteredOptions: any =[];
  appreciations: any;

  @ViewChild('addAppreciation',{static: true}) addAppreciation: ElementRef;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private apprecetionService: AppreciationService
  ) { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.routeImg.push(`appreciation${i + 1}.jpg`);
    }

    this.appreciationForm = this.fb.group({
      name: ['', Validators.required],
      skills: ['buen trabajo', Validators.required],
      img: [this.imgSelect, Validators.required],
      comment: ['', Validators.required],
      anonimus: [false]
    });

    this.userService.getUsers().subscribe(res => this.users = res);

    this.appreciations = this.apprecetionService.getAppreciations();

    this.filteredOptions = this.appreciationForm.get('name').valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.users.slice())
      );
  }

  ngOnDestroy(): void {
    $('body>#addAppreciation').remove();
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.users.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  displayFn(user?: any): string | undefined {
    return user ? user.name : undefined;
  }

  setImg(img) {
    this.imgSelect = img;
    this.appreciationForm.get('img').setValue(img);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.skils.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.setValueSkills();
  }

  remove(fruit: Skills): void {
    const index = this.skils.indexOf(fruit);

    if (index >= 0) {
      this.skils.splice(index, 1);
    }

    this.setValueSkills();
  }

  setValueSkills() {
    let values: string[] = [];
    for (const skill of this.skils) {
      values.push(skill.name);
    }

    this.appreciationForm.get('skills').setValue(values.join(','));

  }


  sendAppresiation() {

    if (this.appreciationForm.invalid) {
      return;
    }

    let appreciation: IAppreciation = {
      anonymous: this.appreciationForm.get('anonimus').value,
      commet: this.appreciationForm.get('comment').value,
      idUser: this.appreciationForm.get('name').value.id,
      img: this.imgSelect,
      tags: this.appreciationForm.get('skills').value.split(','),
    }
    this.apprecetionService.saveAppreciation(appreciation).subscribe(res => {
     console.log(
       this.addAppreciation.nativeElement
     );
    });
   

  }



}
