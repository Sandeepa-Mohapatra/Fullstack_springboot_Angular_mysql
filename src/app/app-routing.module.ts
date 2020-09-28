import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { ImpelsyslibraryComponent } from './impelsyslibrary/impelsyslibrary.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:"",redirectTo:"impelsyslibrary" ,pathMatch:"full"
  },
  {
    path:"search",component:SearchComponent
  },
  {
    path:"all-users",component:AllUsersComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"impelsyslibrary",component:ImpelsyslibraryComponent
  },
  {
    path:"**",component:ImpelsyslibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
