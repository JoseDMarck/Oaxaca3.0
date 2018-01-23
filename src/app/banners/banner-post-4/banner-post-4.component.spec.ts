/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerPost4Component } from './banner-post-4.component';

describe('BannerPost4Component', () => {
  let component: BannerPost4Component;
  let fixture: ComponentFixture<BannerPost4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerPost4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPost4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
