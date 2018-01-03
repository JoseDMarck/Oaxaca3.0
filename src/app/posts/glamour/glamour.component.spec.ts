/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GlamourComponent } from './glamour.component';

describe('GlamourComponent', () => {
  let component: GlamourComponent;
  let fixture: ComponentFixture<GlamourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlamourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlamourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
