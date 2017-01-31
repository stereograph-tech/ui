import { Component, OnInit, Inject } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { UI, GridConfig } from '@stereograph/ui';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

	private _grid: BehaviorSubject<GridConfig>;
	public grid: Observable<GridConfig>;
	public gridKeys: String[];

  constructor(@Inject(UiService) private _uiService: UiService) { 
  	this._grid = new BehaviorSubject<GridConfig>(null);
  	this.grid = this._grid.asObservable();
  	this.gridKeys = [];
  }

  ngOnInit() {
  	this._uiService.init().subscribe((config: UI) => {
  		this._grid.next(config.grid);
  		this.gridKeys = Object.keys(config.grid);
  	});
  }

}
