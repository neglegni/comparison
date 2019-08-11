import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelleEigenschaftenComponent } from './tabelle-eigenschaften.component';

describe('TabelleEigenschaftenComponent', () => {
  let component: TabelleEigenschaftenComponent;
  let fixture: ComponentFixture<TabelleEigenschaftenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelleEigenschaftenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelleEigenschaftenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
