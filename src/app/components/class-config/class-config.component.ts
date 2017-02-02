import { Component, OnInit, Input } from '@angular/core';
import { GridConfig, ClassConfig } from '../../models/ui';

@Component({
  selector: 'app-class-config',
  templateUrl: './class-config.component.html',
  styleUrls: ['./class-config.component.css']
})
export class ClassConfigComponent implements OnInit {

	@Input() classes: ClassConfig[];

  constructor() { }

  ngOnInit() {
  	console.log('classes: ', this.classes);
  }

}
