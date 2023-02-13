import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareLocationBoxComponent } from './share-location-box.component';

describe('ShareLocationBoxComponent', () => {
  let component: ShareLocationBoxComponent;
  let fixture: ComponentFixture<ShareLocationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareLocationBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareLocationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
