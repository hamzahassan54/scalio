import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PostsService', () => {
  let service: PostsService;
  let httpTestingController: HttpTestingController;
  let url = 'http://localhost:8080'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [PostsService]
    });
    service = TestBed.inject(PostsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getPost by postID should return expected data', (done) => {
    const data = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
      },
    ];

    service.getPosts(1).subscribe(data => {
      console.log(data[0].title);
      expect(data[0].userId).toBe(1);
      expect(data[0].id).toBe(1);
      expect(data[0].title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
      expect(data[0].body).toBe("quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto");
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8080/posts/1');

    testRequest.flush(data);
  });

  it('should turn 404 error if post not found', () => {
    service.getPosts(11).subscribe(result => {
      console.log(result)
      expect(result).toBe("http://localhost:8080/posts/11: 404 Not Found");
      fail
    }


    );

    const req = httpTestingController.expectOne('http://localhost:8080/posts/11');

    const msg = '404 error';

    req.flush(msg, { status: 404, statusText: 'Not Found' });


  });

});
