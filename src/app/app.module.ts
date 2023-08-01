import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandLineComponent } from './view/command-line/command-line.component';
import { PromptComponent } from './view/prompt/prompt.component';
import { HistoryComponent } from './view/history/history.component';
import { PreviousCommandComponent } from './view/previous-command/previous-command.component';
import { CommonModule } from '@angular/common';
import { HistoryService } from './services/history.service';

@NgModule({
  declarations: [
    AppComponent,
    PromptComponent,
    CommandLineComponent,
    HistoryComponent,
    PreviousCommandComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [
    HistoryService,
  ],
  bootstrap: [
    AppComponent,
    // PreviousCommandComponent,
  ]
})
export class AppModule { }
