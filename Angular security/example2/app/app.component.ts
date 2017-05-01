import { Component } from '@angular/core';
import { DomSanitizer,SafeUrl } from '@angular/platform-browser';

@Component({
   selector: 'my-app',
  template: `<h1>Angular 2 and Security</h1>
<h3>Bypass Security Component</h3>
<h4>An untrusted URL:</h4>
<p><a  [href]="invader">forbidden </a></p>
<h4>A trusted URL:</h4>
<p><a [href]="invader_bypass">Click me  </a></p>
  `,
})
export class AppComponent  { 
  invader: string;
  invader_bypass: SafeUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.invader = 'javascript:alert("Warning This could be malicious code")';
    this.invader_bypass = sanitizer.bypassSecurityTrustUrl(this.invader);
  }
}