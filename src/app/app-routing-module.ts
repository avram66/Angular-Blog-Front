import { NgModule } from '@angular/core';
import {MyNavbarComponent} from './my-navbar/my-navbar.component';
import {LogInComponent} from './log-in/log-in.component';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';






const appRoutes: Routes = [
  {path: '', component: MyNavbarComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'register', component: RegisterComponent},

];
@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]


})
export class AppRoutingModule {



}
