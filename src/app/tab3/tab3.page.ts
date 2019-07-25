import { Component } from '@angular/core';

import { DatabaseService } from '../database.service';
import { HTTP } from '@ionic-native/http/ngx';
import { from } from 'rxjs';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private dataService: DatabaseService) {

  }

  postForm(json_data) {
    console.log("Posting Form Data");
    this.dataService.insertPlants(json_data);
    console.log("Form Data Posted To Database");
  }

}
