import { Component, OnInit, Inject } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { UI } from '@stereograph/ui';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-code-panel',
  templateUrl: './code-panel.component.html',
  styleUrls: ['./code-panel.component.css']
})
export class CodePanelComponent implements OnInit {

	private _code: BehaviorSubject<string>;
	code: Observable<string>;

  constructor(@Inject(UiService) private _uiService: UiService) {
  	this._code = new BehaviorSubject<string>('');
  	this.code = this._code.asObservable();
  }

  ngOnInit() {
  	this._uiService.config.subscribe((config: UI) => {
  		this._code.next(JSON.stringify(config));
  	});
  }

}
