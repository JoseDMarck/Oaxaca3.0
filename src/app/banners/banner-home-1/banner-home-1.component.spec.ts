/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerHome1Component } from './banner-home-1.component';

describe('BannerHome1Component', () => {
  let component: BannerHome1Component;
  let fixture: ComponentFixture<BannerHome1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerHome1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerHome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
