import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './navigation/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildComponent } from './pages/child/child.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {path:"",component:MainComponent,
  children:[
    {path:"",component:HomeComponent},
    {path:"parent",component:ParentComponent},
    {path:"child",component:ChildComponent},
    {path:"cart",component:CartComponent},


  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
