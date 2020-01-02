import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
// import { Data } from '../models/product';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-build2',
  templateUrl: './build2.component.html',
  styleUrls: ['./build2.component.css']
})
export class Build2Component implements OnInit {

  data1 = [];
  data2 = [];
  data = [];

  constructor(private apiservice: ApiService) { }
  ngOnInit() {
    this.build1();
  }


  CallHome(any){
          this.data.forEach((element,index)=>{
            if (element['image_id'] === any )
                  this.data = element['image_list'];
                  this.data2 = any;
          });
            }

  build1(){
    this.apiservice.build_1()
        .subscribe(da =>{
          var trial=da
          // console.log(trial)
          this.data = trial
          this.data1=trial
            }
      );


}


}
