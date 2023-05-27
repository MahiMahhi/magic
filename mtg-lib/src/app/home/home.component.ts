import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  names: string[] = [];
  filteredNames: string[] = [];
  searchTerm: string = '';
  htmlResponse: string='';
  constructor(private http: HttpClient) {}
  apiUrl = environment.apiUrl;

  ngOnInit() {
  }

  // search() {
  //   const url = `https://scryfall.com/search?as=grid&order=name&q=${encodeURIComponent(this.searchTerm)}+%28game%3Apaper%29`;
  //   const headers=new HttpHeaders();
  //   headers.append('mode','no-cors');
  //   headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

  //   const options = {headers:headers}
  //   this.http.get(url,options).subscribe((response: any) => {
  //     // Assuming the response contains an array of names
  //     this.names = response.names;
  //     this.filteredNames = this.names;
  //   });
  // }

search() {
const url = `https://scryfall.com/search?as=grid&order=name&q=${encodeURIComponent(this.searchTerm)}+%28game%3Apaper%29`;
const requestOptions: RequestInit = {
  method: 'GET',
  mode: 'no-cors'
};

fetch(url, requestOptions)
  .then(response => response.text())
  .then(data => {
    this.htmlResponse = data; // Assign the HTML response to htmlResponse
  })
  .catch(error => console.error('Error:', error));
}
}