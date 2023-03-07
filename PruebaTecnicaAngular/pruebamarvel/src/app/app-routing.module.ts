import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {
    path:'personajes', redirectTo: '/personajes', pathMatch: 'full'
  },
  {
    path: 'personajes', component: PersonajesComponent
  },
{
  path:'comics', redirectTo: '/comics', pathMatch: 'full'
},
{
  path: 'comics', component: ComicsComponent
},

{
  path:'series', redirectTo: '/series', pathMatch: 'full'
},
{
  path: 'series', component: SeriesComponent
}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
