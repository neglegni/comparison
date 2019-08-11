import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AusgewaehlteProdukteComponent } from './ausgewaehlte-produkte.component';

describe('AusgewaehlteProdukteComponent', () => {
  let component: AusgewaehlteProdukteComponent;
  let fixture: ComponentFixture<AusgewaehlteProdukteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AusgewaehlteProdukteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AusgewaehlteProdukteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
