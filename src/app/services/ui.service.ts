import { Injectable, Inject } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { Api } from '@stereograph/core';
import { UI, GridConfig } from '../models/ui';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UiService {

	private _config: BehaviorSubject<UI>;
	config: Observable<UI>;
  private _grid: BehaviorSubject<GridConfig>;
  grid: Observable<GridConfig>;

  constructor(private _api: Api) { 
  	this._config = new BehaviorSubject<UI>(<UI>{});
    this.config = this._config.asObservable();
    this._grid = new BehaviorSubject<GridConfig>(null);
    this.grid = this._grid.asObservable();
  }

  init(): Observable<UI> {

    return this._api.get<UI>('http://localhost:3000/config')
      .flatMap((config: UI) => {
        this._config.next(config);
        //console.log('config: ', this._config.getValue());

        if(config && config.grid) {
          this._grid.next(config.grid);
          //console.log('grid: ', this._grid.getValue());
        }
        return this.config;
      });
  }

  updateGrid($event: any, propertyName: string) {
    let g = this._grid.getValue();
    g[propertyName] = $event;
    this._grid.next(g);
    //console.log('update: ', $event, propertyName);
  }

}
