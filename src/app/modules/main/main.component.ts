import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {TableComponent} from '@app/shared/table/table.component';

@Component({
  selector: 'app-main',
  imports: [
    NgClass,
    TableComponent
  ],
  templateUrl: './main.component.html',
  standalone: true,
  styleUrl: './main.component.scss'
})
export class MainComponent {

  selectedTab: string = 'dashboard';

  setTab(tab: string) {
    this.selectedTab = tab;
  }

}
