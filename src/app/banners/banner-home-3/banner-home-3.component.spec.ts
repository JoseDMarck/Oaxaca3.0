/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerHome3Component } from './banner-home-3.component';

describe('BannerHome3Component', () => {
  let component: BannerHome3Component;
  let fixture: ComponentFixture<BannerHome3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerHome3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerHome3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
