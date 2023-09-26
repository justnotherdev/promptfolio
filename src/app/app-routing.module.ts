import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminalComponent } from './features/terminal/terminal.component';
import { WebsiteComponent } from './features/website/website.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  { path: 'terminal', component: TerminalComponent },
  { path: 'me', component: WebsiteComponent, },
  { path: '', redirectTo: '/terminal', pathMatch: 'full' },
  { path: '**', redirectTo: '/terminal', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
