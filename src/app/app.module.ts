import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { LogInComponent } from './log-in/log-in.component';
import {AppRoutingModule} from './app-routing-module';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './register/register.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {DialogUploadImage, MyProfileComponent} from './my-profile/my-profile.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BlogPageComponent } from './blog-page/blog-page.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import {HomeComponent} from './home-component/home-component';
import { AboutUsComponent } from './about-us/about-us.component';
import {CommonModule} from '@angular/common';
import {ImageCropperModule} from 'ngx-image-cropper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
   MyNavbarComponent,
    LogInComponent,
    RegisterComponent,
    MyProfileComponent,
    BlogPageComponent,
    HomeComponent,
    AboutUsComponent,
    DialogUploadImage
  ],

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserModule,
    LayoutModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatCheckboxModule,
    ImageCropperModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [DialogUploadImage],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
