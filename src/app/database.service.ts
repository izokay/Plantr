import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { from } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public http: HTTP) { 
    console.log("Running Database Service");
  }
  public getPlantData() {

    let locat = 'http://localhost:8101/api/get_plants'
    
    let headers = {
      'Content-Type': 'application/json'
    };

    return this.http.post(locat, {}, {});
    
  }

  public insertPlants(form) {
    console.log("Inserting Plant");

    let headers = { 
      'Content-Type': 'application/json'
    };

    let locat = 'http://localhost:8101/api/insert_plants'
    console.log(form) 
    return new Promise(resolve => {
    	this.http.post(locat, form, {});	
    });

  }
}
