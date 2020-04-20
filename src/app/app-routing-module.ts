import { NgModule } from '@angular/core';
import {MyNavbarComponent} from './my-navbar/my-navbar.component';
import {LogInComponent} from './log-in/log-in.component';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {HomeComponent} from './home-component/home-component';
import {AboutUsComponent} from './about-us/about-us.component';






const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: 'register', component: RegisterComponent}

];
@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]


})
export class AppRoutingModule {



}
