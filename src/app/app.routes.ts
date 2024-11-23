import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ProductListComponent } from './layouts/product-list/product-list.component';
import { DetailProductComponent } from './layouts/detail-product/detail-product.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'product-list', component: ProductListComponent },
    { path: 'detail-product/:id', component: DetailProductComponent},
    { path: '**', redirectTo: ''},
]; 
