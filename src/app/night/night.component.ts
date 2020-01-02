import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-night',
  templateUrl: './night.component.html',
  styleUrls: ['./night.component.css']
})
export class NightComponent implements OnInit {
  data = [];

  constructor(private apiservice: ApiService ) { }

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
