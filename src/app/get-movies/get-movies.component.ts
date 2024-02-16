import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatasService } from '../datas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-movies',
  templateUrl: './get-movies.component.html',
  styleUrls: ['./get-movies.component.scss']
})
export class GetMoviesComponent {

  movies: any;
  dispTable: boolean = false;
  dispadd: boolean = true;
  dispSave: boolean = false;
  dispApply: boolean = false;
  dispMessage: boolean = false;
  message: string = "No Movies Available";
  id: any;
  //declare array to store array when called based on id
  moviesid: any; // moviesid contains array and inside array we have object
  //id for update component
  updateId: any;

  constructor(private service: DatasService, private router: Router) {
    this.getMovies();
  }

  getMovies() {
    //get data api
    this.service.getData().subscribe((data) => {
      console.log(data);
      this.movies = data;              //this.movies = data.movies;
      // console.log(this.movies)
      if (this.movies == null) {
        this.dispTable = false;
        this.dispMessage = true;
        this.dispadd = false;
      }
      else {
        this.dispTable = true;
        this.dispMessage = false;
        this.dispadd = true;
      }
    });
  }

  getDetails(id: number) {
    this.id = id;
    this.dispTable = true;
    this.dispadd = false;
    //getid on the basis of id api 
    this.service.getDataid(this.id).subscribe((data) => {
      // console.log(data);
      this.moviesid = [];
      this.moviesid.push(data);
      // console.log(data[0].name);
      // this.moviesid.push(data.movie.price);
    })
  }

  addMovieButton() {
    this.router.navigate(['/movies/addMovie']);
  }

  edit(id: number) {
    // console.log("update")
    // console.log(id);
    // this.updateId=id;
    this.router.navigate(['/update-movie/' + id]);
  }

  deleteMovie(id: number) {
    this.service.delete(id).subscribe(() => {
      this.getMovies();
    });
  }
  
}
