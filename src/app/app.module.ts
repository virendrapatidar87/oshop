import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import {RouterModule} from "@angular/router";
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AdminAuthGaurd } from './admin-auth-gaurd.service';
import { UserService } from './user.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { DataTableModule } from 'angular5-data-table';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms'; 
import { CustomFormsModule } from 'ng2-validation';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component'; 
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSucessComponent,
    MyOrdersComponent,
    

    LoginComponent,
    
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent
  ],
  imports: [FormsModule,
    CustomFormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    DataTableModule,
    NgbModule.forRoot(),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      
     { path: "products", component: ProductsComponent },
    {

      path:"shopping-cart" , component:ShoppingCartComponent
    },{

      path:"login" , component:LoginComponent
    },
    {

      path:"check-out" , component:CheckoutComponent ,canActivate:[AuthGuard]
    },
    {

      path:"order-sucess" , component:OrderSucessComponent,canActivate:[AuthGuard]
    },
    { 
      path: 'admin/products/new', 
      component: ProductFormComponent, 
      canActivate: [AuthGuard, AdminAuthGaurd] 
    },
    { 
      path: 'admin/products/:id', 
      component: ProductFormComponent, 
      canActivate: [AuthGuard, AdminAuthGaurd] 
    },
    { 
      path: 'admin/products', 
      component: AdminProductsComponent, 
      canActivate: [AuthGuard, AdminAuthGaurd] 
    },
    {

      path:"admin/orders" , component:AdminOrdersComponent,canActivate:[AuthGuard,AdminAuthGaurd]
    },
    
    {

      path:"my/orders" , component:MyOrdersComponent,canActivate:[AuthGuard]
    },{

      path:"" , component:ProductsComponent
    }
  ])
  ],
  providers: [AuthService,AuthGuard,AdminAuthGaurd,UserService,ProductService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
