import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }
  getMarkets(){
    return this.http.get('../../data/markets.json');
  }
  getCountryList(){
    return this.http.get('../../data/countries.json');
  }

  getListofVendors(){
    return this.http.get('http://localhost:5088/api/vendors');
  }
  submitVendorForm(vendorData: any): Observable<any> {
    const url = `http://localhost:5088/api/vendors`;
    return this.http.post(url, vendorData);
  }
}
