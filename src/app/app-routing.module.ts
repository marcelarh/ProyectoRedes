import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRegistrosComponent } from './list-registros/list-registros.component';
import { LoginComponent } from './login/login.component';
import { RegistroFormComponent } from './registro-form/registro-form.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'registro-form', component: RegistroFormComponent },
  { path: 'lista', component: ListRegistrosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {
}
