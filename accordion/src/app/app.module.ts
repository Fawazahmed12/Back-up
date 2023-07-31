import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from "ngx-bootstrap/accordion";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CicleProgramComponent } from './cicle-program/cicle-program.component';
import { SectionDropDownProgramComponent } from './section-drop-down-program/section-drop-down-program.component';
import { DragAndDropProgramComponent } from './drag-and-drop-program/drag-and-drop-program.component';

@NgModule({
  declarations: [
    AppComponent,
    CicleProgramComponent,
    SectionDropDownProgramComponent,
    DragAndDropProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
