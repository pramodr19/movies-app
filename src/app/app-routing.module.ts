import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { GetMoviesComponent } from './get-movies/get-movies.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';

const routes: Routes = [
  {
    path:'movies/addMovie',component:AddMovieComponent
  },
  {
    path:'movies',component:GetMoviesComponent
  },
  {
   path:'update-movie/:id',component:UpdateMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
