/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerPost2Component } from './banner-post-2.component';

describe('BannerPost2Component', () => {
  let component: BannerPost2Component;
  let fixture: ComponentFixture<BannerPost2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerPost2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPost2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
