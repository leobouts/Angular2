import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
   selector: 'my-app',
  template: `<h1 style="text-align:center;">Angular 2 and Security</h1>
  <div class="container">
    <div class="row">
            <div class="col-lg-12     col-md-12 col-sm-12 col-xs-12  "  style="background-color:#003399;">
          <h3  style="color:white;text-align:center;">inject  code with binding innerHTML </h3>
          <h4 style="text-align:center;">interpolation is not interpreted</h4>
          <p style="text-align:center;">{{invader1}}</p>
          <h4 style="text-align:center;"> binding to innerHTML is  interpreted</h4>
          <p style="text-align:center;" [innerHTML]="invader1"></p>
          </div>    
          <div class="col-lg-12   col-md-12 col-sm-12 col-xs-12 "   style="background-color:#CCFFCC;color:blue"> 
                <br>
                <h2 style="text-align:center;">ResourceURL & URL</h2>
                <br>
                <br>
  <div class="row">
        <div class="col-lg-6   col-md-6 col-sm-6 col-xs-6 "   style="background-color:#0099CC;color:green"> 

              <p style="text-align:center;">Trusted:</p>
              <iframe align="left" width="320" height="195"  [src]="safe"> </iframe>
              <br>
              <h4 style="text-align:center;">A trusted URL:</h4>
              <p style="text-align:center;"><a [href]="invader_bypass">Click me  </a></p>

        </div>

        <div class="col-lg-6   col-md-6 col-sm-6 col-xs-6 "   style="background-color:#66CCFF;color:red"> 

              <p style="text-align:center;">Untrusted:</p>
              <iframe align="left" width="320" height="195"  [src]="danger"> </iframe>
              <br>
              <h4 style="text-align:center;">An untrusted URL:</h4>
              <p style="text-align:center;"><a  [href]="invader">forbidden </a></p>

        </div>
 </div>
 </div>

</div>
  `,
})

export class AppComponent  { 
  safe: SafeResourceUrl;
  danger: string;
  invader: string;
  invader_bypass: SafeUrl;
  data= 'Column';
  invader1 = 'This is injected code  <script>alert("code1")</script> <h3>with script tags</h3>';
   constructor(private sanitizer: DomSanitizer) {
    this.invader = 'javascript:alert("Warning This could be malicious code")';
    this.invader_bypass = sanitizer.bypassSecurityTrustUrl(this.invader);
    this.danger = 'https://www.youtube.com/embed/ydtryV65UGk';
    this.safe = sanitizer.bypassSecurityTrustResourceUrl(this.danger);
    
  }
}