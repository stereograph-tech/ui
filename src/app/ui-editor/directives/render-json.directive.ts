import { Directive } from '@angular/core';

@Directive({
  selector: '[appRenderJson]'
})
export class RenderJsonDirective {

  constructor() { 
  	console.log('foo');
  }

}
