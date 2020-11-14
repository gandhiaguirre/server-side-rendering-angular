import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('GetRandomUsers test', (done:DoneFn) => {
    let numberUsers = 50;

    service.getRandomUsers(numberUsers).subscribe(data=>{
      expect(data['results'].length).toBe(numberUsers);

    },(error)=>{
      console.log(error);
      
      fail('Should api be up');
     
    },()=>{
      done();
    })
  });
});
