import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchingCategoriesComponent } from './watching-categories.component';

describe('WatchingCategoriesComponent', () => {
  let component: WatchingCategoriesComponent;
  let fixture: ComponentFixture<WatchingCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchingCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchingCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
