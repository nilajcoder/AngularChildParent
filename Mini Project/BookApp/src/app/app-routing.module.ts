import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { GetbooksComponent } from './getbooks/getbooks.component';
import { UpdatebooksComponent } from './updatebooks/updatebooks.component';

const routes: Routes = [
  {path:"", component:GetbooksComponent},
  {path:"home", component:GetbooksComponent},
  {path:"add", component:AddbooksComponent},
  {path:"update", component:UpdatebooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
