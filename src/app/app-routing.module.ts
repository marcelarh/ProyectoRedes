import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRegistrosComponent } from './list-registros/list-registros.component';
import { RegistroFormComponent } from './registro-form/registro-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/registro', pathMatch: 'full' },
  { path: 'registro', component: RegistroFormComponent },
  { path: 'lista', component: ListRegistrosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {
}
