/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerHome8Component } from './banner-home-8.component';

describe('BannerHome8Component', () => {
  let component: BannerHome8Component;
  let fixture: ComponentFixture<BannerHome8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerHome8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerHome8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
