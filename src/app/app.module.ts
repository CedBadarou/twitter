import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CookieService } from 'ngx-cookie-service'

import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { ShowpostsComponent } from './showposts/showposts.component';
import { FollowedComponent } from './followed/followed.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    PostsComponent,
    ShowpostsComponent,
    FollowedComponent,
    CurrentUserComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path:'register', component: RegisterComponent },
      { path:'login', component: LoginComponent },
      { path:'logout', component: LoginComponent },
      { path:'users', component: UsersComponent },
      { path:'current_user', component: CurrentUserComponent },
      { path:'show_posts/:author', component: ShowpostsComponent },
      { path:'new_post', component: PostsComponent },
      { path:'edit_post/:id', component: EditPostComponent },
      { path:'followed', component: FollowedComponent }
    ])
  ],
  providers: [DataService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
