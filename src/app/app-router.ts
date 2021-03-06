import { Routes } from '@angular/router';

import { HomeComponent } from './template/page/home/home.component';
import { AboutComponent } from './template/page/about/about.component';
import { FaqComponent } from './template/page/faq/faq.component';
import { ContactComponent } from './template/page/contact/contact.component';
import { LoginComponent } from './user/login/login.component';

import { ProductListingComponent } from './product/product-listing/product-listing.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

export const AppRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'faq', component: FaqComponent},
	{path: 'contact-us', component: ContactComponent},	
	{path: 'product', children: [
		{path: '', component: ProductListingComponent},
		{path: 'detail', component: ProductDetailComponent},
	]},
	{path: 'login', component: LoginComponent }
]