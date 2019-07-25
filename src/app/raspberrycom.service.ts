import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { from } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RaspberrycomService {

  constructor(public http: HTTP) { 
    console.log("Running Raspberrycom Service");
  }

  public sendPlantId(id) {
    console.log("Inserting Plant");
    console.log(id);
    let data = {
	"data": id
    }
    let headers = { 
      'Content-Type': 'application/json'
    };

    let locat = 'http://localhost:8101/api/send_data'
    return new Promise(resolve => {
    	this.http.post(locat, data, {});	
    });
  }


}
