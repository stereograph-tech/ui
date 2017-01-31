import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { CodePanelComponent } from './code-panel/code-panel.component';
import { RenderJsonDirective } from './directives/render-json.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	EditorComponent,
  	CodePanelComponent,
    RenderJsonDirective
  ],
  exports: [
  	EditorComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UiEditorModule { }
