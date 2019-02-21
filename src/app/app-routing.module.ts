import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent} from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { TableComponent } from './table/table.component';
const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'product', component: ProductComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'table', component: TableComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
