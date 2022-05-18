import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  jsonResponsData: any;
  postData: any;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    console.log("i am in results")
    this.data.currentMessage.subscribe(msg => this.jsonResponsData = msg);
    this.postData = this.jsonResponsData[0];
    console.log("this is object", this.postData);
  }


}
