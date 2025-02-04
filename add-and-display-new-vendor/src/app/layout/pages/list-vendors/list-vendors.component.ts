import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from "../../ui/breadcrumb/breadcrumb.component";
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-list-vendors',
  standalone: true,
  imports: [BreadcrumbComponent, RouterLink],
  templateUrl: './list-vendors.component.html',
  styleUrl: './list-vendors.component.scss'
})
export class ListVendorsComponent {

  constructor(private api:ApiService){}
  vendors:any
  ngOnInit()
  {
    this.api.getListofVendors().subscribe((res:any)=>{
    this.vendors=res;
    console.log(this.vendors);
    })
  }
}
