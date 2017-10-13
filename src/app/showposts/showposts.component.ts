import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-showposts',
  templateUrl: './showposts.component.html',
  styleUrls: ['./showposts.component.css']
})
export class ShowpostsComponent {
  posts: Array<any>;
  url: Array<any>;
  author: String;

  constructor(private _dataService: DataService,
              private router: Router) {
    if(!localStorage.getItem("username")){
      this.router.navigate(['/login'])
    }
    this.url = this.router.url.split("/")
    this.author = this.url.slice(2).toString();
    this._dataService.request  = this.author
    this._dataService.getPosts()
        .subscribe(res => {
          this.posts = res
          console.log(this.posts)
        });
  }

}
