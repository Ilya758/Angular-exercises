import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { TimerComponent } from './timer/timer.component';
import { TodoComponent } from './todo/todo.component';
import { MainPageComponent } from './routing/main-page/main-page.component';
import { ProtectedPageComponent } from './routing/protected-page/protected-page.component';
import { UnprotectedPageComponent } from './routing/unprotected-page/unprotected-page.component';
import { ChildComponent } from './routing/child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TimerComponent,
    TodoComponent,
    MainPageComponent,
    ProtectedPageComponent,
    UnprotectedPageComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
