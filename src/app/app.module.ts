import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PrimengSharedModule } from 'src/app/modules/shared.module';
import { FormEditableComponent } from './components/form-editable/form-editable.component';
import { FormLookupPipe } from './pipes/form-lookup.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormEditableComponent,
    FormLookupPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimengSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
