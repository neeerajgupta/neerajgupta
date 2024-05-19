import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FeviconService {
  private link: HTMLLinkElement;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.link = this.document.getElementById('favicon') as HTMLLinkElement;
    if (!this.link) {
      this.link = this.document.createElement('link');
      this.link.id = 'favicon';
      this.link.rel = 'icon';
      this.link.type = 'image/x-icon';
      this.document.head.appendChild(this.link);
    }
  }

  setFavicon(iconUrl: string): void {
    this.link.href = iconUrl;
  }
}
