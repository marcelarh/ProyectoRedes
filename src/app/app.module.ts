import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroFormComponent } from './registro-form/registro-form.component';
import { ListRegistrosComponent } from './list-registros/list-registros.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroFormComponent,
    ListRegistrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
