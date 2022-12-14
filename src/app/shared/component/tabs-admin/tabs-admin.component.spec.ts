import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAdminComponent } from './tabs-admin.component';

describe('TabsAdminComponent', () => {
  let component: TabsAdminComponent;
  let fixture: ComponentFixture<TabsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
