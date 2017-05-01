import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { BannerComponent } from './banner-inline.component';

describe('BannerComponent ( testing template)', () => {

  let comp:    BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let de:      DebugElement;
  let de2:      DebugElement;
  let  el2:      HTMLElement;
  let el :      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ], // declare the test component
    })
    fixture = TestBed.createComponent(BannerComponent);
    comp = fixture.componentInstance; // BannerComponent test instance  
   });

   it('1. element p defined', () => {
        de2=fixture.debugElement.query(By.css('p'));
        el2=de2.nativeElement;
        expect(el2).toBeDefined();
    });

    it('2. element h6 defined', () => {
        de2=fixture.debugElement.query(By.css('h6'));
        el2=de2.nativeElement;
        expect(el2).toBeDefined();
    });
    it('3. element h4 defined', () => {
        de2=fixture.debugElement.query(By.css('h4'));
        el2=de2.nativeElement;
        expect(el2).toBeDefined();
    });

    it('4. title of component equal to Testing5', () => {
            expect(comp.title).toEqual('Testing5');
        });


    it('5. h2 contains the word "with" ', () => {
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
    expect(el.textContent).toContain('with');
        });


});


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/