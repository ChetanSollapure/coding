import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentService } from './services/content.service';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
