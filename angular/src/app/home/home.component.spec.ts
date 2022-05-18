
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../services/data.service';
import { PostsService } from '../services/posts.service';
import { HomeComponent } from './home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let h1: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        MatInputModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        MatButtonModule,
        FormsModule,
      ],
      declarations: [HomeComponent],
      providers: [DataService, PostsService],
      schemas: [
        NO_ERRORS_SCHEMA
      ]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should be created', () => {

    expect(component).toBeTruthy();
  });

  it(`should have as title 'Angular Application with NodeJs'`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Application with NodeJs');
  });

  it('should display original title after detectChanges()', () => {
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });

  it('should check input label name', () => {
    let queryByLabel = fixture.debugElement.query(By.css("mat-label"));
    expect(queryByLabel).toBeTruthy();
    expect(queryByLabel.nativeElement).toBeTruthy();
    expect(queryByLabel.nativeElement.outerText).toContain("Enter Post ID");

  })

  it('should click Send button', async(() => {
    let buttonElement = fixture.debugElement.query(By.css('.send-button'));
    spyOn(component, 'sendID');
    buttonElement.triggerEventHandler('click', null);
    fixture.whenStable().then(() => {
      expect(component.sendID).toHaveBeenCalled();
    });
  }));

  it("should disable the button when input field is empty", () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeTruthy();
  });

  // it('should navigate to the Result page', () => {
  //   component.sendID();
  //   const navArgs = routerSpy.navigateByUrl;
  //   expect(navArgs).toEqual("http:localhost:4200/result");
  // });

});

