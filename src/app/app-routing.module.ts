import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LatestComponent } from './latest/latest.component';
import { LatestResolver } from './latest/latest.resolver';
import { NotFoundComponent } from './not-found/not-found.component';
import { PasteViewComponent } from './paste-view/paste-view.component';
import { SingleResolver } from './paste-view/single.resolver';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "latest", component: LatestComponent, resolve: { paste: LatestResolver } },
  { path: "about", component: AboutComponent },
  { path: "uuid/:id", component: PasteViewComponent, resolve: { paste: SingleResolver } },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
