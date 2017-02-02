import { Component, OnInit, OnChanges, Inject } from '@angular/core';
import { GridConfig } from '../../models/ui';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { UiService } from '../../services/ui.service';

@Component({
  selector: '[app-code-panel]',
  templateUrl: './code-panel.component.html',
  styleUrls: ['./code-panel.component.css']
})
export class CodePanelComponent implements OnInit {

  constructor(@Inject(UiService) private _uiService: UiService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
