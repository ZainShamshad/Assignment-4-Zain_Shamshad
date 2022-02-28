import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from "@angular/material/dialog";

import { ActiveItemDirective } from './directives/active-item.directive';
import { InactiveItemDirective } from './directives/inactive-item.directive';
import { AppenderPipe } from './pipes/appender.pipe';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserService } from './services/user.service';
import { BlogService } from './services/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    BlogComponent,
    CreateBlogComponent,
    CreateUserComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ActiveItemDirective,
    InactiveItemDirective,
    AppenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [UserService,BlogService],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateBlogComponent,
    CreateUserComponent
  ]
})
export class AppModule { }
