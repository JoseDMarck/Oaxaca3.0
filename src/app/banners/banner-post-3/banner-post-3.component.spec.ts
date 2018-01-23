/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerPost3Component } from './banner-post-3.component';

describe('BannerPost3Component', () => {
  let component: BannerPost3Component;
  let fixture: ComponentFixture<BannerPost3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerPost3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPost3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
