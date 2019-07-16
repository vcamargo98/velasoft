import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitucionalComponent } from './institucional/institucional.component';

const routes: Routes = [
  {path: '', component: InstitucionalComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
