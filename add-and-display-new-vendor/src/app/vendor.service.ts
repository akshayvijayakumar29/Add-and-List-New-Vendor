import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private apiUrl = 'http://localhost:5088/api/vendors';
  constructor(private http:HttpClient) { }

  submitVendorData(vendorData: any): Observable<any> {
    return this.http.post(this.apiUrl, vendorData);
  }
}
