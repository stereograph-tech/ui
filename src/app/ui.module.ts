import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Api } from '@stereograph/core';

/**
* Components
*/
import { EditorComponent } from './components/editor/editor.component';
import { CodePanelComponent } from './components/code-panel/code-panel.component';
import { MainComponent } from './components/main/main.component';
import { ClassConfigComponent } from './components/class-config/class-config.component';
import { GridConfigComponent } from './components/grid-config/grid-config.component';

/**
* Directives
*/
import { RenderJsonDirective } from './directives/render-json/render-json.directive';

/**
* Services
*/
import { UiService } from './services/ui.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
  	EditorComponent,
  	CodePanelComponent,
    MainComponent,
    ClassConfigComponent,
    GridConfigComponent,
    RenderJsonDirective
  ],
  providers: [
    Api,
    UiService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [MainComponent]
})
export class UiModule { }
