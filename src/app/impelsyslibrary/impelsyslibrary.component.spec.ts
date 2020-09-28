import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpelsyslibraryComponent } from './impelsyslibrary.component';

describe('ImpelsyslibraryComponent', () => {
  let component: ImpelsyslibraryComponent;
  let fixture: ComponentFixture<ImpelsyslibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpelsyslibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpelsyslibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
