import { GlobalService } from './global.service';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appGlobalEvent]'
})
export class GlobalEventDirective {
  constructor(private globalService: GlobalService) {}
  @HostListener('window:keypress', ['$event'])
  windowKeyPress(event) {
    if (event.which === 32) {
      // for Spacebar key
      this.globalService.spaceBarKeyPress.next();
    }
  }
}
