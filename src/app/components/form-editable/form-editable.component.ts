import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: '[app-form-editable]',
  templateUrl: './form-editable.component.html',
  styleUrls: ['./form-editable.component.css']
})
export class FormEditableComponent {
  @Input() selectedField = '';
  @Output() selectedFieldChange = new EventEmitter();
  @Input() fieldName = '';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }
  @HostListener('click')
  onClick() {
    this.selectedFieldChange.emit(this.fieldName);
  }
}
