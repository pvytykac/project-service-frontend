import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';

const BELL_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">` +
                   `<path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 ` +
                   `24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 ` +
                   `18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>`;
const FIRE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">` +
                  `<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->` +
                  `<path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 ` +
                  `33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 ` +
                  `68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8` +
                   `69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/></svg>`;

const PEN_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">` +
                 `<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->` +
                 `<path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 ` +
                 `23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0` +
                  `8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 ` +
                  `18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>`;

const ERASER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7L288 480l9.4 0L512 480c17.7 0 32-14.3 32-32s-14.3-32-32-32l-124.1 0L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416l-9.4 0-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"/></svg>`;

@Component({
  selector: 'app-icon-svg',
  imports: [MatIconModule],
  templateUrl: './icon-svg.component.html',
  styleUrl: './icon-svg.component.css'
})
export class IconSvgComponent {
  constructor() {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    iconRegistry.addSvgIconLiteral('bell', sanitizer.bypassSecurityTrustHtml(BELL_ICON));
    iconRegistry.addSvgIconLiteral('fire', sanitizer.bypassSecurityTrustHtml(FIRE_ICON));
    iconRegistry.addSvgIconLiteral('pen', sanitizer.bypassSecurityTrustHtml(PEN_ICON));
    iconRegistry.addSvgIconLiteral('eraser', sanitizer.bypassSecurityTrustHtml(ERASER_ICON));
  }
}
