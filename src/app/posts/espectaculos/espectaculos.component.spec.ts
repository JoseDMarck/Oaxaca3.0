/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EspectaculosComponent } from './espectaculos.component';

describe('EspectaculosComponent', () => {
  let component: EspectaculosComponent;
  let fixture: ComponentFixture<EspectaculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspectaculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspectaculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
