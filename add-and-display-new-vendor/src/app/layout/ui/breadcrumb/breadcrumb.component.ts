import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Breadcrumb,BreadcrumbService } from '../../../breadcrumb.service';


@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {

  constructor(public breadcrumbService: BreadcrumbService) {}
}
