import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from './post';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css', '../../form.css']
})
export class PostsComponent {

  constructor(private _dataService: DataService,
              private cookieService: CookieService,
              private app: AppComponent,
              private router: Router) {
                if(!localStorage.getItem("username")){
                  this.router.navigate(['/login'])
                }
              }
  model = new Post('');
  submitted = false;
  message: String;
  token : String


  onSubmit() {
    if(this.cookieService.get('token')== ""){
      this.message = "Only logged users can post a new twit"
    }
    else{
      this.submitted = true;
      this._dataService.request = this.model
      this._dataService.newPost()
      .subscribe();
      this.message = "New twit posted"
      AppComponent.updatePosts.next(true);
    }
  }

  get diagnostic() { return JSON.stringify(this.model);}

}
