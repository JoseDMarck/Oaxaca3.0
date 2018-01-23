/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerPost1Component } from './banner-post-1.component';

describe('BannerPost1Component', () => {
  let component: BannerPost1Component;
  let fixture: ComponentFixture<BannerPost1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerPost1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPost1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
