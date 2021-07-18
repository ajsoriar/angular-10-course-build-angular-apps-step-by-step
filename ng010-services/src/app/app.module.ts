import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { NewAndresComponentComponent } from './new-andres-component/new-andres-component.component';
import { MyserviceService } from './myservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    NewAndresComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
