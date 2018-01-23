/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerPost5Component } from './banner-post-5.component';

describe('BannerPost5Component', () => {
  let component: BannerPost5Component;
  let fixture: ComponentFixture<BannerPost5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerPost5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPost5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
