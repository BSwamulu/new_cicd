import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  data = [];

  constructor(private apiservice: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.build1();

  }

  build1(){
    this.apiservice.build_1()
        .subscribe(da =>{
          var trial=da
          // console.log(trial)
            this.data = trial
            console.log(this.data)
          }
       );

  }

}
