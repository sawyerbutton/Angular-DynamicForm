import { Component } from '@angular/core';
import {QuestionService} from './service/question.service';
import {QuestionBase} from './model/QuestionBase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent {
  public questions: any[];
  // passing questions into questions;
  constructor(
    private service: QuestionService
  ) {
    this.questions = service.getQuestions();
  }
}
