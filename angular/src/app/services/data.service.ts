import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private responseData = new BehaviorSubject<any>({});
  currentMessage = this.responseData.asObservable();

  jsonData(msg: any) {
    this.responseData.next(msg);
  }
}
