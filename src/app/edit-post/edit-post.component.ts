import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  id = "";
  check = true;

  constructor(private activetedRoute: ActivatedRoute,
              private _dataService: DataService,
              private app: AppComponent,
              private router: Router) {

    this.activetedRoute.paramMap.subscribe( params =>{
      this.id = params.get('id');
    })
    this._dataService.check()
    .subscribe(res =>{
      console.log(res)
    })
  }

  ngOnInit() {
  }

}
