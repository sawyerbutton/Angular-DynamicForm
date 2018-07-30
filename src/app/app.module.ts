import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './component/dynamic-form-question/dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
