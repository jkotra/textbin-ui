import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LatestComponent } from './latest/latest.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PasteViewComponent } from './paste-view/paste-view.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "latest", component: LatestComponent },
  { path: "about", component: AboutComponent },
  { path: "uuid/:id", component: PasteViewComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
