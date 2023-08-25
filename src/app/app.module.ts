import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandLineComponent } from './features/terminal/components/command/command.component';
import { HistoryComponent } from './features/terminal/components/history/history.component';
import { WebsiteComponent } from './features/website/website.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { PreviousCommandComponent } from './features/terminal/components/previous-command/previous-command.component';
import { PromptComponent } from './features/terminal/components/prompt/prompt.component';
import { HistoryService } from './features/terminal/services/history.service';
import { TerminalComponent } from './features/terminal/terminal.component';
import { TabComponent } from './features/website/components/tab/tab.component';
import { TabsComponent } from './features/website/components/tab/tabs.component';
import { AccordionComponent } from './features/website/components/accordion/accordion.component';
import { CarouselComponent } from './features/website/components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    PromptComponent,
    CommandLineComponent,
    HistoryComponent,
    PreviousCommandComponent,
    WebsiteComponent,
    TerminalComponent,
    NotFoundComponent,
    TabsComponent,
    TabComponent,
    AccordionComponent,
    CarouselComponent,
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
