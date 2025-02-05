import { Routes } from '@angular/router';
import { ListVendorsComponent } from './layout/pages/list-vendors/list-vendors.component';
import { Component } from '@angular/core';
import { CreateVendorComponent } from './layout/pages/layout/create-vendor/create-vendor.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'vendors' // Default route
  },
  {
    path: 'create-vendor',
    component: CreateVendorComponent,
    data: { breadcrumb: 'Create Vendor' }
  },
  {
    path: 'vendors',
    component: ListVendorsComponent,
    data: { breadcrumb: 'Vendors' }
  }

];
