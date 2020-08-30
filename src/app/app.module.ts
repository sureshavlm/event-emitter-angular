import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { ProductService } from './service/products.service';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentcomponentComponent,
    ChildcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService, UserService],
  bootstrap: [ParentcomponentComponent]
})
export class AppModule { }
