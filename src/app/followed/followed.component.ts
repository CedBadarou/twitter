import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-followed',
  templateUrl: './followed.component.html',
  styleUrls: ['./followed.component.css']
})
export class FollowedComponent implements OnInit {
  posts: Array<any>;
  message = "";

  constructor(private _dataService: DataService,
              private router: Router) {
    if(!localStorage.getItem("username")){
      this.router.navigate(['/login'])
    }
    this._dataService.request = {username:localStorage.getItem('username')};
    this._dataService.getFollowedPosts()
        .subscribe(res => {
          if(res ==""){
            this.message = "No twit have been posted yet"
          }
          this.posts = res;
          console.log(res)
        },error => {
          this.message = (error._body)
          // console.log(this.message)
        });
  }

  ngOnInit() {
  }

}
