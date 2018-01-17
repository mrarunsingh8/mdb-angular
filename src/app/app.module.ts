import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from './typescripts/free';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './template/page/home/home.component';
import { AboutComponent } from './template/page/about/about.component';
import { FaqComponent } from './template/page/faq/faq.component';
import { ContactComponent } from './template/page/contact/contact.component';
import { FeaturedProductSlideComponent } from './template/page/featured-product-slide/featured-product-slide.component';
import { FooterComponent } from './template/partial/footer/footer.component';
import { HeaderComponent } from './template/partial/header/header.component';
import { ProductListingComponent } from './product/product-listing/product-listing.component';
import { LoginComponent } from './user/login/login.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FaqComponent,
    ContactComponent,
    FeaturedProductSlideComponent,
    FooterComponent,
    HeaderComponent,
    ProductListingComponent,
    LoginComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,

    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
