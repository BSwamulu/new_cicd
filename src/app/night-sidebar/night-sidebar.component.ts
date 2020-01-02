import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-night-sidebar',
  templateUrl: './night-sidebar.component.html',
  styleUrls: ['./night-sidebar.component.css']
})
export class NightSidebarComponent implements OnInit {

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
