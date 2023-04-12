import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exentric-form';
  datas:any = {}
  selectedField = '';
  genderOptions = [
    {label:'男',value:1},
    {label:'女',value:2},
  ]
  departments = [
    {label:'部門一',value:'S0050'},
    {label:'部門二',value:'S0051'},
    {label:'部門三',value:'S0052'}
  ]

  unselect(){
    this.selectedField = '';
  }
}
