import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { GridConfig, ClassConfig } from '../../models/ui';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-class-config',
  templateUrl: './class-config.component.html',
  styleUrls: ['./class-config.component.css']
})
export class ClassConfigComponent implements OnInit, OnChanges {

	@Input() grid: Observable<GridConfig>;
	classes: ClassConfig[];

  constructor() { }

  ngOnInit() {
  	this.grid.subscribe((grid: GridConfig) => {
  		if(grid && grid.classes) {
  			this.classes = grid.classes;
  		}
  	});
  }

  ngOnChanges(changes: any) {
  	console.log('changes: ', changes);
  }
}
