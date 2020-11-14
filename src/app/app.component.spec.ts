import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SSR Angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SSR Angular');
  });

  it('should have 4 specific buttons Users,Home,Default,Location', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
  
    const buttons=compiled.querySelectorAll('button');
    let buttonUsers= Array.from(buttons).find(button => button['textContent'] === "Users");
    let buttonHome= Array.from(buttons).find(button => button['textContent'] === "Home");
    let buttonDefault= Array.from(buttons).find(button => button['textContent'] === "Default");
    let buttonLocation= Array.from(buttons).find(button => button['textContent'] === "Location");
    
    expect(!!buttonUsers&&!!buttonHome&&!!buttonDefault&& !!buttonLocation).toBeTrue();
  });
});
