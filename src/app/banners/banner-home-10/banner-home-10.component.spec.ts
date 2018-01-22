/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerHome10Component } from './banner-home-10.component';

describe('BannerHome10Component', () => {
  let component: BannerHome10Component;
  let fixture: ComponentFixture<BannerHome10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerHome10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerHome10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
