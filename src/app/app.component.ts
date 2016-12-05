import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading: boolean;
  data: Object;

  constructor(private http: Http) {}

   makeRequest(): void {
     this.loading = true;
     this.http.request('http://jsonplaceholder.typicode.com/posts/1')
        .subscribe((res: Response) => {
            this.data = res.json();
            this.loading = false;
     });
  }

   makePost(): void {
     this.loading = true;
     this.http.post(
       'http://jsonplaceholder.typicode.com/posts',
       JSON.stringify({
         body: 'bar',
         title: 'foo',
         userId: 1
       })
     )
     .subscribe((res: Response) => {
       this.data = res.json();
       this.loading = false;
     });
    }

     makeDelete(): void {
       this.loading = true;
       this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
          .subscribe((res: Response) => {
            this.data = res.json();
            this.loading = false;
          });
      }
}
