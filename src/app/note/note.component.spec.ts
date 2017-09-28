import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { NoteComponent } from './note.component';
import { EnumIteratorPipe } from '../enum-iterator.pipe';
import { NoteService } from '../note.service';
import { HttpModule, JsonpModule } from '@angular/http';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteComponent, EnumIteratorPipe ],
      imports: [FormsModule, HttpModule, JsonpModule],
      providers: [NoteService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
