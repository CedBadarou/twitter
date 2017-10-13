import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;
  request:any;

  constructor(private _http: Http,
              public options: RequestOptions) { }

  getUsers() {
    return this._http.get("/api/users")
      .map(result => this.result = result.json().data);
  }

  postUsers() {
    return this._http.post("/api/register", this.request)
      .map(result => this.result = result.json().data);
  }

  login() {
    return this._http.post("/api/login", this.request)
      .map(result => this.result = result.json().data);
  }

  newPost() {
    return this._http.post("/api/new_post", this.request)
      .map(result => this.result = result.json().data);
  }

  deletePost() {
    return this._http.delete("/api/delete_post/"+this.request)
      .map(result => this.result = result.json().data);
  }

  getPosts() {
    return this._http.get("/api/get_posts/"+this.request)
      .map(result => this.result = result.json().data);
  }

  getLastPosts() {
    return this._http.get("/api/get_last_posts")
      .map(result => this.result = result.json().data);
  }

  follow() {
    return this._http.post("/api/follow", this.request)
      .map(result => this.result = result.json().data);
  }

  unfollow() {
    return this._http.post("/api/unfollow", this.request)
      .map(result => this.result = result.json().data);
  }

  getFollowedPosts() {
    return this._http.post("/api/get_followed_post", this.request)
      .map(result => this.result = result.json().data);
  }

  getPostsByHash() {
    return this._http.post("/api/get_post_by_hash", this.request)
      .map(result => this.result = result.json().data);
  }

  getCurrentUserPosts() {
    return this._http.post("/api/get_current_user_posts", this.request)
      .map(result => this.result = result.json().data);
  }

  getFollowers() {
    this.request = this.request.username
    return this._http.get("/api/get_followers/"+this.request)
      .map(result => this.result = result.json().data);
  }
  
  getFollowers() {
    this.request = this.request.username
    return this._http.get("/api/get_followers/"+this.request)
      .map(result => this.result = result.json().data);
  }


}
