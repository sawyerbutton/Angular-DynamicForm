import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../../model/QuestionBase';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent {
  // question type could be questionBase but will meet some problem like property is not in this object, using any is a easy way for this
  // this is a type error rather than a logic error which could be dismissed
  // @Input() question: QuestionBase<any>;
  @Input() question: any;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
