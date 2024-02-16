import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatasService } from '../datas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent implements OnInit, AfterViewInit {
  name: string = '';
  price: any;
  body = {
    name: '',
    price: 0
  }
  
  constructor(private datas: DatasService, private route: ActivatedRoute, public router: Router) { }
  ngAfterViewInit(): void {
    this.getDetails(this.updateId);
  }

  updateId: any;
  ngOnInit() {
    // Subscribe to the params observable
    this.route.params.subscribe(params => {
      this.updateId = params['id'];
      console.log('Parameter value:', this.updateId);
    });
  }

  getDetails(id: any) {
    this.datas.getDataid(id).subscribe((data) => {
      this.body.name = data[0].name;
      this.body.price = data[0].price;
    })
  }

  updateMovie() {
    this.datas.update(this.updateId, this.body).subscribe((data) => {
    });
    //after updating naviagte to movies table
    this.router.navigate(['/movies']);

  }

  cancel() {
    this.body.name = '';
    this.body.price = 0;
  }
}