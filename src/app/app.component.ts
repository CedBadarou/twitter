import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Subject } from 'rxjs/Subject';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Array<any>;
  username: String;
  public static updatePosts: Subject<boolean> = new Subject();
  public static updateUsername: Subject<boolean> = new Subject();
  searchBar="";
  searchByHashtags="";
  err="";


  constructor(private _dataService: DataService,
              private cookieService: CookieService,
              private router: Router){
    this._dataService.getLastPosts()
    .subscribe(res => this.posts = res);

    AppComponent.updatePosts.subscribe(res => {
      this._dataService.getLastPosts()
      .subscribe(res => this.posts = res);
    })

    AppComponent.updateUsername.subscribe(res => {
      this.username = localStorage.getItem('username');
    })
    if(localStorage.getItem('username')){
      this.username = localStorage.getItem('username');
    }
  }
  logout():void{
    this.cookieService.delete('token');
    localStorage.removeItem('username');
    this.username=""
    this.router.navigate(['/login'])
  }

  onSubmit() {
    if(this.searchBar!=""){
      this._dataService.request={hashtag:this.searchBar};
      this._dataService.getPostsByHash()
      .subscribe(res => {
        this.searchByHashtags = res;
        if($("#results")){$("#results").remove()}
        $("header").after( `
          <div id="results">
          <h2>Results</h2>
            <table>
              <thead>
                <tr>
                  <th>Users</th>
                  <th>Twits</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody id="twits">

              </tbody>
            </table>
            <button type="button" id="stop">Quit</button>
          </div>
          <script>
            $("#stop").click(function(){
              $("#results").hide();
              $("#router-outlet").show();
            })
          </script>
        ` );
        res.forEach(function(twit){
          $("#twits").append("<tr><td>"+twit.author+"</td><td>"+twit.content+"</td><td>"+twit.date+"</td></tr>")
        })
        $("#router-outlet").hide();
      },error => {
        alert("No twit found");
      });
    }
  }

  stop() {
    $("#results").hide();
    $("#router-outlet").show();
  }
}
