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

   it('should have a defined component BannerComponent', () => {
        expect(BannerComponent).toBeDefined();
    });
it('should have a defined h2', () => {
de = fixture.debugElement.query(By.css('h2'));
el = de.nativeElement;
expect(el).toBeDefined();
    });
  
it('should have a defined p', () => {
 de2 = fixture.debugElement.query(By.css('p'));
    
    el2 = de2.nativeElement;
        expect(el2).toBeDefined();
    });


});


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/