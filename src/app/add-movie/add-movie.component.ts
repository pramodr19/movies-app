import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  dispAdd: boolean = false;
  dispSave: boolean = false;
  iname: string = '';
  iprice = null;
  successful: boolean = false;
  body = {
    name: this.iname,
    price: this.iprice
  }

  constructor(private service: DatasService) { }

  ngOnInit() {
    this.addMovieTab();
  }

  addMovieTab() {
    //to display input elements in html
    this.dispAdd = true;
    //disp save button
    this.dispSave = true;
  }

  save() {
    this.body.name = this.iname;
    this.body.price = this.iprice;
    //post api
    this.dispSave = true;
    this.service.postData(this.body).subscribe((data) => {
      console.log(data)
      this.successful = true;
    })
  }

  cancel() {
    this.iname = '';
    this.iprice = null;
  }
}
