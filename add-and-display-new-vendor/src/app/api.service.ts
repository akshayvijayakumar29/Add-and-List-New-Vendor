import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }
  // getCountries(){
  //   return this.http.get('../../data/countries.json');
  // }
  getCountryList(){
    return this.http.get('../../data/countries.json');
  }
}
