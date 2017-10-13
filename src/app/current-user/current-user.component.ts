import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {

  posts: Array<any>;
  followers: Array<any>;
  followed: Array<any>;

  constructor(private _dataService: DataService,
              private app: AppComponent,
              private router: Router) {
    if(!localStorage.getItem("username")){
      this.router.navigate(['/login'])
    }
    this._dataService.request={username:localStorage.getItem("username")}
    this._dataService.getCurrentUserPosts()
    .subscribe(res=>{
      this.posts = res;
    },error=>{
      console.log(error);
    })
    this._dataService.getFollowers()
    .subscribe(res=>{
      console.log(res)
      this.followers = res.followedBy;
      this.followed = res.follow;
    },error=>{
      console.log(error);
    })
  }

  // edit(id){
  //   $("#"+id).after(`
  //     <tr id=id+"edit">
  //       <td>
  //         <input type="textarea" required>
  //       </td>
  //       <td>
  //         <button type="submit">Submit</button>
  //       </td>
  //       <td>
  //         <button type="submit">Cancel</button>
  //       </td>
  //     </tr>
  //   `)
  // }

  delete(id){
    this._dataService.request=id;
    this._dataService.deletePost()
    .subscribe(res=>{
      console.log(res);
      AppComponent.updatePosts.next(true);
      $("#"+id).remove();
    }, error=>{
      console.log(error);
    })
  }

  unfollow(username){
    this._dataService.request={username:username, follower:localStorage.getItem("username")};
    this._dataService.unfollow()
    .subscribe(res=>{
      console.log(res);
      AppComponent.updatePosts.next(true);
      $("#"+username+"followed").remove();
    }, error=>{
      console.log(error);
    })
  }

  ngOnInit() {
  }

}
