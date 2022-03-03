import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  value: any;
  //  day = new Date();

  users = [
    { name: 'gopi', gender: 'm' },
    { name: 'bharth', gender: 'm' },
    { name: 'selvi', gender: 'f' },
  ];


 date$ = interval(1000).pipe(

     map( x => new Date()),
     take(10)

 );


  jsonData = this.http.get('https://jsonplaceholder.typicode.com/todos/2');

  constructor(public http: HttpClient) {}

  adduser(uservalue) {
    this.users.push({ name: uservalue, gender: 'm' });
    console.log(this.users);
  }
}
