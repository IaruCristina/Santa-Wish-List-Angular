import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaPageComponent } from './santa-page.component';

describe('SantaPageComponent', () => {
  let component: SantaPageComponent;
  let fixture: ComponentFixture<SantaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
