import { Directive, Input, OnInit, OnChanges, Renderer, ElementRef } from '@angular/core';
import { GridConfig } from '../../models/ui';

@Directive({
  selector: '[app-render-json]'
})
export class RenderJsonDirective implements OnInit, OnChanges {
	
	@Input() grid: GridConfig;
	json: string;
	_nativeElement: Node;
	options: any;

  constructor(private _renderer: Renderer, private _elementRef: ElementRef) {
  	console.log('element: ', this._elementRef);
  	this.options = {
  		tab_size: 2
  	}
  }

  ngOnInit() {}

  ngOnChanges(changes: any) {
  	if(changes && changes.grid) {;
  		let obj = changes.grid.currentValue;
  		if(obj && obj.source) {
  			this.json = this.formatJson(obj.source.getValue(), '', 0, false);
  			this._elementRef.nativeElement.innerHTML = this.json;
  		}
  	}
  }

  formatJson(obj: any, key: string, depth: number, trailingComma: boolean) {
  	let tabs = '';
  	for(let i = 0; i < depth * this.options.tab_size; i++) {
  		tabs += '&nbsp';
  	}
  	if(obj instanceof Array) {
  		if(obj.length == 0) {
  			return `${tabs}[]` + this._trailingComma(trailingComma);
  		}
  		let str = `${tabs}[`;
  		// arrays
  		for(let i = 0; i < obj.length; i++) {
  			let val = obj[i];
  			str += this.formatJson(val, null, depth + 1, (i != obj.length -1));
  		}
  		return str + `${tabs}]` + this._trailingComma(trailingComma);
  	} else if(obj !== null && obj !== undefined && typeof obj === "object") {
  		let str = `${tabs}{<br>`;
  		let keys = Object.keys(obj);
  		// object literals
  		for(let i = 0; i < keys.length; i++) {
  			str += this.formatJson(obj[keys[i]], keys[i], depth + 1, (i != keys.length - 1));
	  	}
	  	return str + `${tabs}}` + this._trailingComma(trailingComma);
  	} else {
  		if(key) {
  			// primitives
  			return `${tabs}${key} : ${obj}` + this._trailingComma(trailingComma);	
  		} else {
  			return `${tabs}${obj}` + this._trailingComma(trailingComma);
  		}  		
  	}  	
  }

  private _trailingComma(predicate: any) {
  	return (predicate === true ? ',': '') + '<br>';
  }
}
