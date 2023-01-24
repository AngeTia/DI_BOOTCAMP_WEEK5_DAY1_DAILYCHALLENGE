import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("https://swapi.dev/api/films").subscribe(
      films => console.log(films)
    );
  }
}
