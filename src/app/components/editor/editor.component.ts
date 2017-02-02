import { Component, OnInit, OnChanges, Inject } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: '[app-editor]',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(@Inject(UiService) private _uiService: UiService) {
  }

  ngOnInit() {
  	this._uiService.init().subscribe(() => {});
  }

}
