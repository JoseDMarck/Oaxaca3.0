/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerHome2Component } from './banner-home-2.component';

describe('BannerHome2Component', () => {
  let component: BannerHome2Component;
  let fixture: ComponentFixture<BannerHome2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerHome2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerHome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
