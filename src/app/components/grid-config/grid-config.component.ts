import { Component, OnInit, Inject } from '@angular/core';
import { GridConfig } from '../../models/ui';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { UiService } from '../../services/ui.service';

@Component({
  selector: '[app-grid-config]',
  templateUrl: './grid-config.component.html',
  styleUrls: ['./grid-config.component.css']
})
export class GridConfigComponent implements OnInit {

	grid: GridConfig;

  constructor(@Inject(UiService) private _uiService: UiService) { }

  ngOnInit() {
  	this._uiService.grid.subscribe((grid: GridConfig) => {
  		console.log('update to grid-config: ', grid);
  		this.grid = grid;
  	});
  }

  updateGrid($event: any, propertyName: string) {
  	if(!propertyName) {
  		throw new Error('properpty name is undefined');
  	}
  	this._uiService.updateGrid($event, propertyName);
  }

}
