import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from "@angular/router";
import { DataService } from '../services/data.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id = '';
  title = 'Angular Application with NodeJs';
  object: any;
  button: boolean = true
  errorMsg: any;
  msg: any

  constructor(private postsservices: PostsService,
    private router: Router,
    private dataService: DataService,
    private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
  }
  sendID() {
    this.postsservices.getPosts(this.id)
      .pipe(
        catchError(error => {
          this.errorMsg = error.message;
          this.openSnackBar(this.errorMsg, "Cancel")
          return of([]);
        })
      ).subscribe(data => {
        if (data.length > 0) {
          this.object = data;
          this.dataService.jsonData(this.object);
          this.router.navigate(['/result'])
        }
      });
  }
  modelChanged(arg: any) {
    if (arg == null) {
      this.button = true
    } else {
      this.button = false
    }

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
