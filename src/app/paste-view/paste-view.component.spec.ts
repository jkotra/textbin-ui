import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteViewComponent } from './paste-view.component';

describe('PasteViewComponent', () => {
  let component: PasteViewComponent;
  let fixture: ComponentFixture<PasteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasteViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
