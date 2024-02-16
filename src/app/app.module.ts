import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { GetMoviesComponent } from './get-movies/get-movies.component';
import { FormsModule } from '@angular/forms';
import { DatasService } from './datas.service';
import { UpdateMovieComponent } from './update-movie/update-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    GetMoviesComponent,
    UpdateMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
