import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoModule } from './modules/todo/todo.module';
import {APP_BASE_HREF} from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule, 
        JsonpModule,
        RouterTestingModule,
        TodoModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
      ],
      providers:[{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
