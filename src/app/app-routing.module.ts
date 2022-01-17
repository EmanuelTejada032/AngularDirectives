import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'products',
      loadChildren: () => import('./products/products.module').then( module => module.ProductsModule )  
    },
    {
      path: '**',
      redirectTo: 'products'  
    }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
