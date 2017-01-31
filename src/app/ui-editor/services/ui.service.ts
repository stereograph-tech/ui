import { Injectable, Inject } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { Api } from '@stereograph/core';
import { UI } from '@stereograph/ui';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UiService {

	private _config: BehaviorSubject<UI>;
	config: Observable<UI>;

  constructor(private _api: Api) { 
  	this._config = new BehaviorSubject<UI>(<UI>{});
    this.config = this._config.asObservable();
  }

  init(): Observable<UI> {
    return this._api.get<UI>('http://localhost:3000/config')
      .flatMap((config: UI) => {
        this._config.next(config);
        console.log(this._config.getValue());
        return this.config;
      });
  }

}
