import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { TestDirective } from './test.directive';
import { TestPiprPipe } from './test-pipr.pipe';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    NgStyleComponent,
    TestDirective,
    TestPiprPipe,
    TodoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
