/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OaxacaComponent } from './oaxaca.component';

describe('OaxacaComponent', () => {
  let component: OaxacaComponent;
  let fixture: ComponentFixture<OaxacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OaxacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OaxacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
