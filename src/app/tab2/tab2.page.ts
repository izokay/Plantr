import { Component } from '@angular/core';

import { DatabaseService } from '../database.service';
import { HTTP } from '@ionic-native/http/ngx';
import { from } from 'rxjs';
import { RaspberrycomService } from '../raspberrycom.service';
import { timeout } from 'q';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public json_arr_fin: [] = [];

  constructor(private dataService: DatabaseService, private raspService: RaspberrycomService) {

  }

  ionViewWillEnter() {
    console.log("Function Run");
    
    this.dataService.getPlantData().then( data => {
      console.log("Function Hit");
      console.log(data.data);
      
      let json_arr = JSON.parse(data.data);
      this.json_arr_fin = json_arr;
    });  
  }

  sendChosen(json_data){
    this.raspService.sendPlantId(json_data);
    console.log("Selected ID Send To Server");
  }

}

