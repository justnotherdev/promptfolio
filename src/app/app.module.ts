import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandLineComponent } from './command/command.component';
import { HistoryComponent } from './history/history.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PreviousCommandComponent } from './previous-command/previous-command.component';
import { PromptComponent } from './prompt/prompt.component';
import { HistoryService } from './services/history.service';
import { TerminalComponent } from './terminal/terminal.component';

@NgModule({
  declarations: [
    AppComponent,
    PromptComponent,
    CommandLineComponent,
    HistoryComponent,
    PreviousCommandComponent,
    PortfolioComponent,
    TerminalComponent,
    NotFoundComponent,
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
  ]
})
export class AppModule { }
