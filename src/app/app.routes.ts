import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ProductListComponent } from './layouts/product-list/product-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: '**', redirectTo: ''},
]; 
