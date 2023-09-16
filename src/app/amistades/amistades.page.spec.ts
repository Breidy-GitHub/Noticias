import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmistadesPage } from './amistades.page';

describe('AmistadesPage', () => {
  let component: AmistadesPage;
  let fixture: ComponentFixture<AmistadesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AmistadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
