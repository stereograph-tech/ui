import { Directive, Input, OnInit, OnChanges, Renderer, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GridConfig } from '../../models/ui';

@Directive({
  selector: '[sgRenderJson]'
})
export class RenderJsonDirective implements OnInit, OnChanges {
	
	@Input() grid: Observable<GridConfig>;
	json: string;
	_nativeElement: Node;
	options: any;

  constructor(private _renderer: Renderer, private _elementRef: ElementRef) {
  	//console.log('element: ', this._elementRef);
  	this.options = {
  		tab_size: 2
  	}
  }

  ngOnInit() {
  	this.grid.subscribe((grid: GridConfig) => {
  		//console.log('grid updated: ', grid);
  		this.json = this.formatJson(grid, '', 0, false);
  		this._elementRef.nativeElement.innerHTML = 
  			`<span class='json-rendered'>${this.json}</span>`;
  	});
  }

  ngOnChanges(changes: any) {
  	//console.log('changes: ', changes);
  }

  formatJson(obj: any, key: string, depth: number, trailingComma: boolean) {
  	let tabs = '';
  	for(let i = 0; i < depth * this.options.tab_size; i++) {
  		tabs += '&nbsp';
  	}
  	if(obj instanceof Array) {
  		let str = `${tabs}<span class='json-key'>${key}</span>`
  		+ `<span class='json-colon'>:</span>`
  		+ `<span class='json-bracket'>[</span><br>`;

  		if(obj.length == 0) {
  			return `<span class='json-bracket'>]</span>` 
  			+ this._trailingComma(trailingComma);
  		}
  		
  		// arrays
  		for(let i = 0; i < obj.length; i++) {
  			let val = obj[i];
  			str += this.formatJson(val, null, depth + 1, (i != obj.length -1));
  		}
  		return str + `${tabs}<span class='json-bracket'>]</span>` 
  		+ this._trailingComma(trailingComma);
  	} else if(obj !== null && obj !== undefined && typeof obj === "object") {
  		let str = `${tabs}<span class='json-bracket'>{</span><br>`;
  		let keys = Object.keys(obj);
  		// object literals
  		for(let i = 0; i < keys.length; i++) {
  			str += this.formatJson(obj[keys[i]], keys[i], depth + 1, (i != keys.length - 1));
	  	}
	  	return str + `${tabs}<span class='json-bracket'>}</span>` 
	  		+ this._trailingComma(trailingComma);
  	} else {
  		if(key) {
  			// primitives
  			return `${tabs}<span class='json-key'>${key}</span>`
  			+ `<span class='json-colon'> : </span>`
  			+ `<span class='json-obj'>${obj}</span>`
  			+ `<span class='json-comma'>` + this._trailingComma(trailingComma) + '</span>';	
  		} else {
  			return `<span class='json-value'>${tabs}${obj}</span>` 
  				+ this._trailingComma(trailingComma);
  		}  		
  	}  	
  }

  private _trailingComma(predicate: any) {
  	return (predicate === true ? ',': '') + '<br>';
  }
}
