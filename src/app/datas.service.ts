import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  private apiUrl = 'http://localhost:3000/api/v2/movies';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const observable = new Observable<any>(subscriber => {
      this.http.get(this.apiUrl).subscribe((res: any) => {
        if (res) {
          console.log(res);
          subscriber.next(res);
        } else {
          subscriber.error("Error");
        }
      });
    });
    return observable;

  }

  getDataid(id: number): Observable<any> {
    const observable = new Observable(subscriber => {
      this.http.get(this.apiUrl + '/' + id).subscribe((res) => {
        if (res) {
          subscriber.next(res);
        } else {
          subscriber.error("Error");
        }
      });
    });
    return observable;
  }

  postData(body: any): Observable<any> {
    const observable = new Observable<any>(subsciber => {
      this.http.post(this.apiUrl, body).subscribe((res: any) => {
        if (res) {
          subsciber.next(res);
        } else {
          subsciber.error("Error");
        }
      });
    });
    return observable;
  }

  ///api/v1/movies/:id
  update(id: any, body: any): Observable<any> {
    const observable = new Observable<any>(subscriber => {
      this.http.patch(this.apiUrl + "/" + id, body).subscribe((res: any) => {
        if (res) {
          subscriber.next(res);
        } else {
          subscriber.error("Error");
        }
      });
    });
    return observable;
  }

  delete(id: any): Observable<any> {
    // return this.http.delete(this.apiUrl + "/" + id)
    const observable = new Observable<any>(subscriber => {
      this.http.delete(this.apiUrl + "/" + id).subscribe((res)=>{
        if(res){
          subscriber.next(res);
        }else{
          subscriber.error("Error");
        }
      });
    });
    return observable;
  }

}
